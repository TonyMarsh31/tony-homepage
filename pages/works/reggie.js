import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Reggie">
    <Container>
      <Title>
        Reggie <Badge>2022</Badge>
      </Title>
      <P>
        Reggie is a CMS system , i build it for learning java and spring boot
        And later rebuilt the project to complete my university thesis
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <span>
            <Link href="https://margelo.io/" target="_blank">
              Github repository
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, Spring Boot, MySQL, ElementUI</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/reggie.png" alt="reggie" />
    </Container>
  </Layout>
)
export default Work
// export { getServerSideProps } from '../../components/chakra'
