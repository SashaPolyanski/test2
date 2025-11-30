'use client'

async function revalidatePosts() {
  try {
    const response = await fetch('https://test-s7h4.vercel.app/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error('Ошибка при revalidate:', err);
  }
}

export default function Home() {
  return (
      <div>
        <button onClick={revalidatePosts}>Reload page</button>
      </div>
  );
}
