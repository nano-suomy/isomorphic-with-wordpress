import * as React from 'react';
import Link from 'next/link';

const Index = () => <section>
    <h1>Hello, Next.js!</h1>
    <Link href='/articles'>
        <a>Click here to start fetch from WordPress by using WP API</a>
    </Link>
    <style jsx>{`
        section {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        h1 {
            font-size: 60px;
        }
        a {
            text-decoration: none;
            color: dodgerblue;
            font-size: 40px;
        }
        a:hover {
            color: skyblue;
        }
    `}</style>
</section>;

export default Index;