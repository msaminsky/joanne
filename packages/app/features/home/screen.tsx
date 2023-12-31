import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  styled,
  useToastController,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { useLink } from 'solito/link'
import { Camera, CameraType } from 'react-native-camera-kit'

const MagicButton = styled(Button, {
  name: 'Button',
  backgroundColor: '#C4D6B0',
})

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">Joanne.</H1>
        <Paragraph ta="center">Your Mental Health Payments Center</Paragraph>

        <Separator />
        <Paragraph ta="center">
          Made by
          <Anchor color="$color12" href="https://twitter.com/msaminsky" target="_blank">
            @msaminsky
          </Anchor>
          ,{' '}
          <Anchor
            color="$color12"
            href="https://github.com/msaminsky/joanne"
            target="_blank"
            rel="noreferrer"
          >
            give it a ⭐️
          </Anchor>
        </Paragraph>
      </YStack>

      {/* <XStack>
        <Button {...linkProps}>Link to user</Button>
      </XStack> */}

      <PayButton />
      {/* <SheetDemo /> */}
    </YStack>
  )
}

function PayButton() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <MagicButton size="$9" onPress={() => setOpen((x) => !x)}>
        Pay Joanne
      </MagicButton>
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 50 }} exitStyle={{ opacity: 50 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          {/* <Camera
            ref={(ref) => (this.camera = ref)}
            cameraType={CameraType.Back} // front/back(default)
            flashMode="auto"
          /> */}
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 50 }} exitStyle={{ opacity: 50 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
