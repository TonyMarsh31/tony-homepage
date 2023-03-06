import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbReggie from '../public/images/works/reggie.png'
const Works = () => (
  <Layout titile="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        toy projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="reggie" title="Reggie" thumbnail={thumbReggie}>
            A CMS Based on the SSM Stack
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="reggie" title="Reggie" thumbnail={thumbReggie}>
            test
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Heading as="h3" fontSize={20} mb={4}>
        School works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="reggie" title="Reggie" thumbnail={thumbReggie}>
            test
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem id="reggie" title="Reggie" thumbnail={thumbReggie}>
            test
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
