import React from 'react'
import { Button } from '../ui/button'
// import { Button } from "@/components/ui/button"
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Card, CardContent } from '../ui/card'
import { Link } from 'react-router-dom'

function RegisterForm() {
  return (
    <>
      <div>

        <div className="flex flex-col gap-6">
          <Card className="overflow-hidden">
            <CardContent className="grid p-0 md:grid-cols-2">
              <form className="p-6 md:p-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold">Create new account</h1>
                    <p className="text-balance text-muted-foreground">
                      Register to Smartify
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="userName">Username</Label>
                    <Input
                      id="userName"
                      type="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input id="password" type="password" required />
                  </div>

                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture">Picture</Label>
                    <Input id="picture" type="file" />
                  </div>
                  <Button type="submit" className="w-full">
                    Sign up
                  </Button>


                  <div className="text-center text-sm">
                    already have an account?{" "}
                    <Link to="/auth/login" className="underline underline-offset-4">
                      Sign In
                    </Link>
                  </div>
                </div>
              </form>
              <div className="relative hidden bg-muted md:block">
                <img
                  src="/placeholder.svg"
                  alt="Image"
                  className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
              </div>
            </CardContent>
          </Card>
          <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
            By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
            and <a href="#">Privacy Policy</a>.
          </div>
        </div>

      </div>

    </>
  )
}

export default RegisterForm