if (!process.env.GSAP_AUTH) {
  console.error(
    'GSAP_AUTH is not set. Please set it in your .env.local file or as an environment variable.'
  );
  process.exit(1);
}
