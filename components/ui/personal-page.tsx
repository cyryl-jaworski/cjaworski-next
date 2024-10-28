'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from "lucide-react"

export function PersonalPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <Card className="w-full max-w-md p-6 bg-white/90 backdrop-blur-sm shadow-xl rounded-xl">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              alt="Cyryl Jaworski"
              className="w-full h-full object-cover"
              src="./cyryl.jpg?height=128&width=128"
            />
          </div>
          <h1 className="text-3xl font-bold text-center text-gray-800">Cyryl Jaworski</h1>
          <p className="text-xl text-center text-gray-600">Software Developer</p>
          <p className="text-center text-gray-500 max-w-sm">
            Passionate about creating elegant solutions to complex problems. Always learning, always coding.
          </p>
          <div className="flex space-x-4 mt-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <Linkedin className="w-5 h-5" />
              <a href="https://www.linkedin.com/in/cyryl-jaworski/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:cyryl.jaworski@proton.me">Email</a>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}