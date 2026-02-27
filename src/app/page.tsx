import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";

const Page = async () => {
  const users = await prisma.user.findMany();
  return (
    <div>
      <Button>Click me 2</Button>
      {JSON.stringify(users)}
    </div>
  );
};

export default Page;