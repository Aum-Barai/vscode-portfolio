import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Aum Barai is an AI and Machine Learning Engineer specializing in data analysis, machine learning, and robotics"
      />
      <meta
        name="keywords"
        content="aum barai, aum, barai, ai engineer, machine learning, data analyst, aum barai portfolio, vscode-portfolio, robotics"
      />
      <meta property="og:title" content="Aum Barai's Portfolio" />
      <meta
        property="og:description"
        content="An AI and Machine Learning Engineer specializing in data analysis, machine learning, and robotics."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Aum Barai',
};
