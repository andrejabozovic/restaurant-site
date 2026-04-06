const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  sr: () => import('@/dictionaries/sr.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {

  const lang = dictionaries[locale] ? locale : 'sr';
  
  return dictionaries[lang]();
};