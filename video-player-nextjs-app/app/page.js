// app/page.js
'use client';

import Head from 'next/head';
import VideoPlayer from './components/VideoPlayer';
import UploadForm from './components/UploadForm';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Video Player App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
        <h1>Welcome to our Video Player App</h1>
        </div>
        <div>
        <VideoPlayer />
        </div>
        <div>
        <UploadForm />
        </div>
      </main>
    </div>
  );
}