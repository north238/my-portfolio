import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Hr,
  Button,
} from '@react-email/components';
import * as React from 'react';

const baseUrl = process.env.VERCEL_URL
  ? `${process.env.VERCEL_URL}`
  : '/static';

interface emailProps {
  email: string;
  name: string;
  message: string;
}

export const Email = ({ email, name, message }: emailProps) => (
  <Html>
    <Head />
    <Preview>お問い合わせいただきありがとうございます</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{marginTop: '40px'}}>
          <Img
            src={`${baseUrl}/logo.png`}
            width="40"
            height="37"
            alt="logo"
            style={margin}
          />
          <Heading style={h1}>{name}様</Heading>
          <Text style={paragraph}>
            この度はお問い合わせいただきありがとうございます。
            <br />
            お問い合わせいただいた内容をご確認ください。
            <br />
            <br />
            以下の内容をご確認ください。
          </Text>

          <Hr />
          <Container style={{margin: '20px 0 20px 0'}}>
            <Text style={paragraph}>
              <b>お名前: {name}</b>
            </Text>
            <Text style={paragraph}>
              <b>メールアドレス: {email}</b>
            </Text>
            <Text style={paragraph}>
              <b>お問い合わせ内容: {message}</b>
            </Text>
          </Container>
          <Hr />
        </Section>
      </Container>
      <Section style={footer}>
        <Row>
          <Column align="center">
            <Text style={h1}>Fumiya Kitayama</Text>
            <Button
              pX={20}
              pY={12}
              style={button}
              href={'https://fumiya-portfolio.net'}
            >
              ホームページへ
            </Button>
          </Column>
        </Row>
        <Text style={{ textAlign: 'center', color: '#706a7b' }}>
          © 2023 Fumiya Kitayama
        </Text>
      </Section>
    </Body>
  </Html>
);

export default Email;

const fontFamily = 'HelveticaNeue,Helvetica,Arial,sans-serif';

const main = {
  backgroundColor: '#efeef1',
  margin: '0 auto',
  fontFamily,
};

const container = {
  width: '465px',
  margin: '40px auto',
  padding: '20px',
  backgroundColor: '#ffffff',
  border: '1px solid #eaeaea',
  borderRadius: '3px',
};

const margin = {
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: 20,
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const footer = {
  width: '465px',
  margin: '40px auto',
  padding: '20px',
};

const button = {
  backgroundColor: '#313131',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
};
