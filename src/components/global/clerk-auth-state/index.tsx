import React from 'react'
import {
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs'
import { User } from 'lucide-react'
import Loader from '../loader'
import { Button } from '@/components/ui/button'

type Props = {}

const ClerkAuthState = (props: Props) => {
  return (
    <>
    {/* The ClerkLoading wrapper renders the Loader component when the authentication state is being determined. This ensures the user sees a loading indicator until the state is resolved. */}
      <ClerkLoading>
        <Loader state>
          <></>
        </Loader>
      </ClerkLoading>
      <SignedOut>
        <SignInButton>
          <Button
            className="rounded-xl 
          bg-[#252525] 
          text-white 
          hover:bg-[#252525]/70
          "
          >
            <User />
            Login
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton>
          {/* The UserButton.UserProfileLink provides a clickable label ("Dashboard") and an icon for navigation. */}
          <UserButton.UserProfileLink
            label="Dashboard"
            url={`/dashboard`}
            labelIcon={<User size={16} />}
          />
        </UserButton>
      </SignedIn>
    </>
  )
}

export default ClerkAuthState
