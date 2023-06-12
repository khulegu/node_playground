const getPackage = async (package_id: string) => {
  "https://hippo.cards/api/v2/package/action/:package";
};

const getPackageWords = async (package_id: string) => {
  "https://hippo.cards/api/v2/package/action/:package/word";
};

const bootstrap = async () => {
  for (let i = 0; i < 1; i++) {
    let id = i.toString();

    const package = await getPackage(id);

    console.log(package);
  }
};

bootstrap();
