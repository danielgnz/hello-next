import Link from 'next/link';
import Header from '../components/Header';
import Layout from '../components/MyLayout';

const aboutPageContent = <p>This is the about page</p>

export default function About() {
	return <Layout content={aboutPageContent} />;
}


// =========== START of Method 1 - Layout as a Higher Order Component =========== 

// import withLayout from '../components/MyLayout';
// const Page = () => <p>This is the about page</p>;
// export default withLayout(Page);

// =========== END of Method 1 - Layout as a Higher Order Component =========== 