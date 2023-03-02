import { Container, Box, Heading } from '@chakra-ui/react'
const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="blue" p={3} mb={6} align="center">
        <p>
          Hi, I'm Sun Tao
          <br />
          welcome to my personal website.
        </p>
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            About Me
          </Heading>
          <p>
            Student based in Shanghai , on my way to become a Software Engineer.
          </p>
        </Box>
      </Box>
    </Container>
  )
}
export default Page
