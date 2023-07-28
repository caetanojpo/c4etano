import { Flex, Image } from "@chakra-ui/react";
import bannerImage from "./homeImage.png";

export default function Banner() {
  return (
    <Flex as="section" width={{ base: "100%", xl: "90%" }} height="100%">
      <Flex width="100%" justifyContent="center" alignItems="end">
        <Image
          src={bannerImage}
          alt="Foto de João Pedro, um rapaz branco, de olhos castanhos claros, cabelos pretos, lisos e curtos, barba de tamanho curto/médio. Está utilizando um óculos de grau redondo, camisa de botão com manga curta, na cor preta. Está sorrindo de braços cruzados. Atrás há a figura de um triangulo laranja, com tonalidade fluorescente."
        />
      </Flex>
    </Flex>
  );
}
