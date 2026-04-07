import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/get-dictionary";

import Menu from "@/components/pages/Menu"; 

const componentsMap = {
  "menu": Menu, 
};

export default async function InnerPage({ params }) {

  const { lang, slug } = await params;
  const path = slug?.[0];

  
  if (!path || !componentsMap[path]) notFound();

  const dictionary = await getDictionary(lang);
  const Component = componentsMap[path];

  return (
    <Component 
      dict={dictionary[path] || {}} 
      lang={lang} 
    />
  );
}