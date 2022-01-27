import type { NextPage } from "next";
import Button from "../../components/buttons";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";

const Write: NextPage = () => {
  return (
    <Layout canGoBack title="Write">
      <form className="p-4 space-y-4">
        <TextArea required placeholder="Ask a question!" />
        <Button text="Share" />
      </form>
    </Layout>
  );
};

export default Write;
