import { Link, Stack, useRouter } from 'expo-router';
import { Text } from 'react-native';

import { Container } from '~/components/Container';

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: `error` }} />
      <Container>
        <Text className={styles.title}>This screen doesn't exist.</Text>
        <Link href="/homescreen" className={styles.link}>
          <Text className={styles.linkText}>Go to home screen!</Text>
        </Link>
      </Container>
    </>
  );
}

const styles = {
  title: `text-xl font-bold`,
  link: `mt-4 pt-4`,
  linkText: `text-base text-[#2e78b7]`,
};
