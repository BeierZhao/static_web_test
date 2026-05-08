/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />
type MachineData = {
  model: string;
  category: 'powder-packaging' | 'vision-inspection' | 'automation';
  subcategory?: string;
  title: string;
  tags: string[];
  thumbnail: string;
  weightRange?: string;
  accuracy?: string;
  speed?: string;
  power?: string;
  dimensions?: string;
  materials: string[];
  compliance: {
    remoteSupport: boolean;
    esaCsaCertified: boolean;
  };
  components: string[];
  highlight?: string;
};
