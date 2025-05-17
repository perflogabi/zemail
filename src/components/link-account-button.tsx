'use client';

import { Button } from './ui/button';

const LinkAccountButton = () => {
  const handleClick = async () => {
    const res = await fetch('/api/auth/route');
    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      console.error(data.error);
    }
  };

  return <Button onClick={handleClick}>Conectar com Google</Button>;
};

export default LinkAccountButton;
