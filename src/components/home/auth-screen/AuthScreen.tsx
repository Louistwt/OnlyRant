import React from 'react'
import HeroSection from './HeroSection';
import { ModeToggle } from '@/components/ModeToggle';

const AuthScreen = () => {
  return (
    <div className="flex flex-col">
      <ModeToggle />
      <HeroSection />
    </div>
  )
}

export default AuthScreen;