"use client";

import { createClient } from "@/src/lib/supabase/client";
import { Button } from "@/src/components/ui/button";
import { useRouter } from "next/navigation";
import styles from "./button.module.css";

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  return <Button className={styles.button} onClick={logout}>Logout</Button>;
}
