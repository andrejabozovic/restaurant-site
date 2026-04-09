import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/get-dictionary";

import Menu from "@/components/pages/Menu"; 
import Services from "@/components/pages/Services";
import PhotoGallery from "@/components/pages/Photo-gallery";
import VideoGallery from "@/components/pages/Video-gallery";

const componentsMap = {
  "menu": Menu, 
  "services": Services,
  "image-gallery": PhotoGallery,
  "video-gallery": VideoGallery,

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