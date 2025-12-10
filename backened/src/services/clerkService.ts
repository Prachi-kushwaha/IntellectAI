import {Request, Response} from 'express'
import {prisma} from '../../lib/prisma'
import bcrypt from "bcrypt";
import { generateToken } from '../utils/token';

export const postUserInfo = async (req: Request, res: Response) => {
  try {
    const { userId, email, firstName, lastName, password, username } = req.body

    // Validate input (security)
    if (!userId || !email || !firstName || !password || !username) {
      return res.status(400).json({ error: "Missing required fields" })
    }
     const hashed = await bcrypt.hash(password, 10)

    // Prisma in try block (correct)
    const user = await prisma.user.create({
      data: {
        clerkId: userId,
        email,
        firstName,
        lastName,
        username,
        password:hashed
      },
    })

    const token = generateToken({ userId: user.clerkId , email: user.email })

    return res.status(201).json({user, token})

  } catch (error: any) {
    console.error("User creation error:", error) // Log internally

    // Send generic error (security best practice)
    return res.status(500).json({
      error: "Something went wrong while creating the user",
    })
  }
}

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password} = req.body

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" })
    }

    // 1. Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" })
    }

    // 2. Compare password
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" })
    }

    const token = generateToken({ userId: user.clerkId , email: user.email })

     return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        clerkId: user.clerkId,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });

  } catch (error) {
    console.error("Login error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}


export const getUserInfo = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    if (!userId) {
        return res.status(400).json({ error: "Missing userId parameter" })
    }

    const user = await prisma.user.findUnique({
      where: { clerkId:userId },
    })
    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }
    return res.status(200).json(user)

  } catch (error: any) {
    console.error("User retrieval error:", error) // Log internally
    return res.status(500).json({
      error: "Something went wrong while retrieving the user",
    })
  }
}

export const updateUserInfo = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const { email, firstName, lastName } = req.body
    if (!userId) {
        return res.status(400).json({ error: "Missing userId parameter" })
    }
    const user = await prisma.user.update({
      where: { clerkId: userId },
      data: { email, firstName, lastName },
    })
    return res.status(200).json(user)
    } catch (error: any) {
        console.error("User update error:", error) // Log internally
        return res.status(500).json({
        error: "Something went wrong while updating the user",
      })
    }
}

export const deleteUserInfo = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    if (!userId) {
        return res.status(400).json({ error: "Missing userId parameter" })
    }
    await prisma.user.delete({
        where: { clerkId: userId },
    })
    return res.status(204).send()
  }
    catch (error: any) {
        console.error("User deletion error:", error) // Log internally
        return res.status(500).json({
        error: "Something went wrong while deleting the user",
      })
    }
}

export const setUserNewPassword = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const { newPassword, email } = req.body

    if (!userId || !newPassword || !email) {
      return res.status(400).json({ error: "Missing required fields" })
    }

    // Step 1: Find the user by Clerk ID
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    })

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    // Step 2: Check if email matches
    if (user.email !== email) {
      return res.status(403).json({ error: "Email does not match" })
    }

    // Step 3: Hash new password
    const hashed = await bcrypt.hash(newPassword, 10)

    // Step 4: Update password
    await prisma.user.update({
      where: { clerkId: userId },
      data: { password: hashed },
    })

    return res.status(200).json({ message: "Password updated successfully" })

  } catch (error: any) {
    console.error("Password update error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}
