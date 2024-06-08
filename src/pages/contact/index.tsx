import { NextPage } from 'next';

import Layout from '@/components/common/Layout';
import Container from '@/components/common/parts/Container';
import ContactForm from '@/components/contact/ContactForm';
import { Routes } from '@/lib/data/routes';

const ContactPage: NextPage = () => {
  return (
    <Layout path={Routes.CONTACT.url} title={Routes.CONTACT.title}>
      <div className="min-h-[calc(100vh-224px)] bg-[url('/util/graph_paper.png')] py-20">
        <Container maxWidth="max-w-3xl">
          <h1 className="mb-20 text-center text-2xl font-bold sm:text-3xl">
            {Routes.CONTACT.title}
          </h1>

          <div>
            <ContactForm />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ContactPage;
