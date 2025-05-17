import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getAurinkoAuthUrl = async (serviceType: 'Google' | 'Office365') => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user?.id) {
    throw new Error("Unauthorized");
  }

  const returnUrl = `${process.env.NEXT_PUBLIC_URL}/api/aurinko/callback`;

  const params = new URLSearchParams([
    ['clientId', process.env.AURINKO_CLIENT_ID!],
    ['scopes', 'Mail.Read Mail.ReadWrite Mail.Send Mail.Drafts Mail.All'],
    ['responseType', 'code'],
    ['returnUrl', returnUrl],
    ['userId', user.id],
    ['serviceType', serviceType], // ✅ Somente esse
  ]);

  return `https://api.aurinko.io/v1/auth/authorize?${params.toString()}`;
};
