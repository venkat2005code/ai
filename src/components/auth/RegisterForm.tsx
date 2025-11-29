import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RegisterForm = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add registration logic here
    // For now, redirect to home page
    navigate("/");
  };

  return (
    <div className="w-full max-w-md mx-auto px-4">
      {/* Logo + Title */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-highlight flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">AI</span>
          </div>
          <span className="font-bold text-2xl text-white">IntelliTools</span>
        </div>
        <p className="text-white/90">Create your account</p>
      </div>

      {/* Register Card */}
      <div className="bg-card rounded-2xl shadow-card border border-border p-8">
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* First Name + Last Name Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                First Name
              </label>
              <Input
                id="firstName"
                type="text"
                placeholder="John"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                Last Name
              </label>
              <Input
                id="lastName"
                type="text"
                placeholder="Doe"
                className="w-full"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full"
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-2">
              Confirm Password
            </label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              className="w-full"
            />
          </div>

          {/* Role Select */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
              Role
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-2">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
              className="mt-1"
            />
            <label htmlFor="terms" className="text-sm text-foreground cursor-pointer leading-tight">
              I agree to the{" "}
              <Link to="#" className="text-primary hover:text-primary/80">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="#" className="text-primary hover:text-primary/80">
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Create Account Button */}
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Create Account
          </Button>

          {/* Sign In Link */}
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:text-primary/80 font-medium">
              Sign in
            </Link>
          </p>
        </form>
      </div>

      {/* Back to Home */}
      <div className="text-center mt-6">
        <Link to="/" className="text-sm text-white/70 hover:text-white flex items-center justify-center gap-1">
          <span>←</span>
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
