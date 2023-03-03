import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'

const Website = ({ Component, PageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...PageProps} key={router.router} />
      </Layout>
    </ChakraProvider>
  )
}
export default Website
