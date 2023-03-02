import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" bg="gray.100" minH="100vh">
      <Head>
        <meta
          name="viewport"
          content="width = device - width, initial-scale=1.0"
        />
        <title>Sun Tao - Homepage</title>
      </Head>
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
