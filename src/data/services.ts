export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  buttonText: 'Get a Quote' | 'COMING SOON';
  imageUrl: string;
  images: string[];
  features: string[];
  categorySlug: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  // ── 1. New Fireplaces ─────────────────────────────────────────────────────
  {
    id: 'new-fireplaces',
    slug: 'new-fireplaces',
    title: 'New Fireplaces',
    services: [
      {
        id: 'classic-wood-burning-fireplace',
        slug: 'classic-wood-burning-fireplace',
        title: 'Classic Wood-Burning Fireplace',
        shortDescription: 'Experience the timeless charm of a traditional wood-burning fireplace. Crafted for warmth and ambiance, perfect for any home.',
        fullDescription: 'Bring the authentic warmth and crackling ambiance of a real wood-burning fireplace into your home. Our expert team handles everything from site preparation and masonry to final inspection, ensuring a safe and beautiful installation. Each fireplace is custom-built to complement your space and lifestyle.',
        price: 'Starting at $3,500',
        buttonText: 'Get a Quote',
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cf35b8f5cec34d63d442475ea098672c2c31ccb6',
        images: [
          'https://cdn.builder.io/api/v1/image/assets/TEMP/cf35b8f5cec34d63d442475ea098672c2c31ccb6',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/90e08a28c0d8dd3abb52bc5b09bf9de2f239a535',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/2669ae660f778c354999102af4b7b75a4d1adf19',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/5cb22344f6cb5f051020dada14bd734a2b78b4b2',
        ],
        features: [
          'Professional masonry and installation by certified technicians',
          'Custom surround and hearth design to match your décor',
          'Full chimney construction or integration with existing flue',
          'Safety inspection and code compliance included',
          'Optional damper, screen, and door accessories',
        ],
        categorySlug: 'new-fireplaces',
      },
      {
        id: 'modern-gas-fireplace-insert',
        slug: 'modern-gas-fireplace-insert',
        title: 'Modern Gas Fireplace Insert',
        shortDescription: 'Effortlessly enjoy warmth and convenience with a sleek gas insert. No wood, no mess—just instant comfort at the push of a button.',
        fullDescription: 'Upgrade your existing fireplace or install a brand-new gas insert for effortless, clean heat. Gas inserts offer consistent warmth, remote-control convenience, and energy efficiency. Our team handles gas line connections, venting, and full installation to meet all local codes.',
        price: 'Starting at $2,800',
        buttonText: 'Get a Quote',
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/90e08a28c0d8dd3abb52bc5b09bf9de2f239a535',
        images: [
          'https://cdn.builder.io/api/v1/image/assets/TEMP/90e08a28c0d8dd3abb52bc5b09bf9de2f239a535',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/cf35b8f5cec34d63d442475ea098672c2c31ccb6',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/fde3662e32bbf20c79972df6871a5ed666daf56a',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/2669ae660f778c354999102af4b7b75a4d1adf19',
        ],
        features: [
          'Remote control and thermostat operation',
          'High-efficiency direct-vent or natural-vent options',
          'Realistic flame technology with glowing embers',
          'Gas line connection and pressure testing included',
          'Wide selection of surrounds and facing materials',
        ],
        categorySlug: 'new-fireplaces',
      },
      {
        id: 'linear-gas-fireplace',
        slug: 'linear-gas-fireplace',
        title: 'Linear Gas Fireplace',
        shortDescription: 'Sleek, wide-format flames perfect for modern living rooms and open-plan spaces.',
        fullDescription: 'Linear gas fireplaces offer a dramatic horizontal flame display that pairs beautifully with contemporary interior design. Their long, wide flame bed creates an impressive focal point and provides efficient, controllable heat for open-plan living areas.',
        price: 'Starting at $4,500',
        buttonText: 'Get a Quote',
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fde3662e32bbf20c79972df6871a5ed666daf56a',
        images: [
          'https://cdn.builder.io/api/v1/image/assets/TEMP/fde3662e32bbf20c79972df6871a5ed666daf56a',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/28da91d1474b2297115afd4d432b1d47460db9e6',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/c2d3daa0d4085f388f79dd38b8c688178f82ba73',
        ],
        features: [
          'Wide-format horizontal flame bed',
          'Recessed or wall-mount installation',
          'Smart home and remote control compatible',
          'Clean-face or glass-front design options',
          'High-efficiency direct-vent technology',
        ],
        categorySlug: 'new-fireplaces',
      },
      {
        id: 'see-through-gas-fireplace',
        slug: 'see-through-gas-fireplace',
        title: 'See-Through Gas Fireplace',
        shortDescription: 'A stunning double-sided fireplace that connects two rooms with shared warmth and beauty.',
        fullDescription: 'See-through gas fireplaces serve as a stunning architectural element between two spaces—like a living room and dining room or bedroom and bath. Both sides enjoy the ambiance and heat, while the open design creates a sense of openness and luxury.',
        price: 'Starting at $5,200',
        buttonText: 'Get a Quote',
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/28da91d1474b2297115afd4d432b1d47460db9e6',
        images: [
          'https://cdn.builder.io/api/v1/image/assets/TEMP/28da91d1474b2297115afd4d432b1d47460db9e6',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/fde3662e32bbf20c79972df6871a5ed666daf56a',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/c2d3daa0d4085f388f79dd38b8c688178f82ba73',
        ],
        features: [
          'Visible from two separate rooms',
          'Creates open architectural statement',
          'Shared heat output for both spaces',
          'Customizable frame and surround on each side',
          'Available in various widths and heights',
        ],
        categorySlug: 'new-fireplaces',
      },
      {
        id: 'corner-gas-fireplace',
        slug: 'corner-gas-fireplace',
        title: 'Corner Gas Fireplace',
        shortDescription: 'Maximize unused corner space with a beautifully integrated gas fireplace.',
        fullDescription: 'Corner fireplaces make the most of underutilized room corners while providing warmth and character. Our corner gas fireplace installations are tailored to your room\'s dimensions and your design preferences, creating a seamless and dramatic focal point.',
        price: 'Starting at $3,800',
        buttonText: 'Get a Quote',
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c2d3daa0d4085f388f79dd38b8c688178f82ba73',
        images: [
          'https://cdn.builder.io/api/v1/image/assets/TEMP/c2d3daa0d4085f388f79dd38b8c688178f82ba73',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/fde3662e32bbf20c79972df6871a5ed666daf56a',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/28da91d1474b2297115afd4d432b1d47460db9e6',
        ],
        features: [
          'Space-saving corner design',
          'Customizable angled surround and mantel',
          'Fits both small and large room configurations',
          'Integrated gas line and venting',
          'Flame and heat adjustable by remote',
        ],
        categorySlug: 'new-fireplaces',
      },
      {
        id: 'electric-fireplace-installation',
        slug: 'electric-fireplace-installation',
        title: 'Electric Fireplace',
        shortDescription: 'A hassle-free solution for those who want ambiance without major renovations. Ideal for apartments and modern interiors.',
        fullDescription: 'Electric fireplaces offer the look and feel of a real fire with zero emissions and easy installation. Perfect for condos, apartments, and rooms without existing flues, our team will mount, wire, and configure your electric fireplace for an immediate, elegant focal point.',
        price: 'Starting at $1,500',
        buttonText: 'Get a Quote',
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2669ae660f778c354999102af4b7b75a4d1adf19',
        images: [
          'https://cdn.builder.io/api/v1/image/assets/TEMP/2669ae660f778c354999102af4b7b75a4d1adf19',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/90e08a28c0d8dd3abb52bc5b09bf9de2f239a535',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/cf35b8f5cec34d63d442475ea098672c2c31ccb6',
        ],
        features: [
          'No venting or gas lines required',
          'Wall-mount, built-in, or freestanding configurations',
          'Adjustable flame brightness and heat settings',
          'Safe for all room types including bedrooms',
          'Energy-efficient LED flame technology',
        ],
        categorySlug: 'new-fireplaces',
      },
    ],
  },

  // ── 2. Outdoor Living ─────────────────────────────────────────────────────
  {
    id: 'outdoor-living',
    slug: 'outdoor-living',
    title: 'Outdoor Living',
    services: [
      {
        id: 'custom-fire-pit-installation',
        slug: 'custom-fire-pit-installation',
        title: 'Custom Fire Pit',
        shortDescription: 'Gather around a beautifully designed fire pit, perfect for outdoor entertainment and cozy nights under the stars.',
        fullDescription: 'Transform your backyard into an outdoor oasis with a custom-built fire pit. Whether gas or wood-burning, we design and install fire pits that become the centerpiece of your outdoor entertaining space. Choose from a variety of shapes, sizes, and materials to match your landscape.',
        price: 'Starting at $2,200',
        buttonText: 'Get a Quote',
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5cb22344f6cb5f051020dada14bd734a2b78b4b2',
        images: [
          'https://cdn.builder.io/api/v1/image/assets/TEMP/5cb22344f6cb5f051020dada14bd734a2b78b4b2',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/3e4cef7d24cf802bb034bcb205ef2012c15a2f84',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/ee8f2c46d2e5a8079b783ca289e528daceb20a54',
        ],
        features: [
          'Custom round, square, or freeform designs',
          'Gas or wood-burning configurations',
          'Built-in seating wall options available',
          'Integrated gas line installation for gas models',
          'Weather-resistant materials built to last',
        ],
        categorySlug: 'outdoor-living',
      },
      {
        id: 'built-in-outdoor-grill-kitchen',
        slug: 'built-in-outdoor-grill-kitchen',
        title: 'Built-In Outdoor Grill & Kitchen',
        shortDescription: 'Upgrade your backyard with a premium built-in grill setup, designed for seamless cooking and entertaining.',
        fullDescription: 'Create the ultimate outdoor kitchen with a custom built-in grill station. We design and install complete outdoor cooking environments including grills, side burners, refrigeration, and countertops—all weather-proofed and built to entertain.',
        price: 'Starting at $4,000',
        buttonText: 'Get a Quote',
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3e4cef7d24cf802bb034bcb205ef2012c15a2f84',
        images: [
          'https://cdn.builder.io/api/v1/image/assets/TEMP/3e4cef7d24cf802bb034bcb205ef2012c15a2f84',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/5cb22344f6cb5f051020dada14bd734a2b78b4b2',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/ee8f2c46d2e5a8079b783ca289e528daceb20a54',
        ],
        features: [
          'Premium stainless steel or built-in grill options',
          'Custom countertop materials (granite, concrete, tile)',
          'Optional side burners, sink, and refrigeration',
          'Weather-resistant cabinetry and framing',
          'Gas line installation and utility connections',
        ],
        categorySlug: 'outdoor-living',
      },
      {
        id: 'wood-fired-pizza-oven',
        slug: 'wood-fired-pizza-oven',
        title: 'Wood-Fired Pizza Oven',
        shortDescription: 'Bring Italy to your backyard with a handcrafted, wood-fired pizza oven. Ideal for homemade pizzas and artisanal baking.',
        fullDescription: 'Nothing compares to the flavor of food cooked in a real wood-fired oven. Our handcrafted pizza ovens reach temperatures of 800°F+ for perfect Neapolitan-style pizza, roasted meats, and artisan bread. Each oven is built with high-quality refractory materials for lasting performance.',
        price: 'Starting at $3,000',
        buttonText: 'Get a Quote',
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ee8f2c46d2e5a8079b783ca289e528daceb20a54',
        images: [
          'https://cdn.builder.io/api/v1/image/assets/TEMP/ee8f2c46d2e5a8079b783ca289e528daceb20a54',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/5cb22344f6cb5f051020dada14bd734a2b78b4b2',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/3e4cef7d24cf802bb034bcb205ef2012c15a2f84',
        ],
        features: [
          'Reaches 800°F+ for authentic Neapolitan pizza',
          'Refractory brick dome construction',
          'Custom arch designs and finish options',
          'Integrated chimney and spark arrestor',
          'Optional surrounding countertop and prep area',
        ],
        categorySlug: 'outdoor-living',
      },
    ],
  },

  // ── 3. Mantels & Surrounds ────────────────────────────────────────────────
  {
    id: 'mantels-surrounds',
    slug: 'mantels-surrounds',
    title: 'Mantels & Surrounds',
    services: [
      {
        id: 'custom-fireplace-mantel',
        slug: 'custom-fireplace-mantel',
        title: 'Custom Fireplace Mantel',
        shortDescription: 'Enhance your fireplace with a handcrafted mantelpiece, available in wood, stone, or modern finishes.',
        fullDescription: 'A beautiful mantel frames your fireplace and elevates the entire room. We custom-craft mantels in wood, marble, granite, limestone, and modern materials to perfectly match your home\'s style—from traditional colonial to sleek contemporary.',
        price: 'Starting at $800',
        buttonText: 'Get a Quote',
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/27179ae8b85bc4e386ef994ff5fbf0683762a475',
        images: [
          'https://cdn.builder.io/api/v1/image/assets/TEMP/27179ae8b85bc4e386ef994ff5fbf0683762a475',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/3fe1f56cc8123e69a331e6ffe982bbb00d0ad8f2',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/05d65b0161e2a0fd47f73cfe17fc414912c27cbe',
        ],
        features: [
          'Custom-built to your exact dimensions',
          'Wood, marble, granite, limestone, and modern options',
          'Traditional, transitional, and contemporary styles',
          'Professional installation and finishing',
          'Includes shelf, legs, and hearth surround',
        ],
        categorySlug: 'mantels-surrounds',
      },
      {
        id: 'decorative-fireplace-surround',
        slug: 'decorative-fireplace-surround',
        title: 'Decorative Fireplace Surround',
        shortDescription: 'A beautifully crafted surround that adds elegance and character to your living space.',
        fullDescription: 'Update the look of your fireplace with a stunning new surround. From classic tile work to modern stone cladding, our surrounds are designed to make your fireplace the visual centerpiece of any room. We handle all measurements, material sourcing, and installation.',
        price: 'Starting at $1,200',
        buttonText: 'Get a Quote',
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3fe1f56cc8123e69a331e6ffe982bbb00d0ad8f2',
        images: [
          'https://cdn.builder.io/api/v1/image/assets/TEMP/3fe1f56cc8123e69a331e6ffe982bbb00d0ad8f2',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/27179ae8b85bc4e386ef994ff5fbf0683762a475',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/05d65b0161e2a0fd47f73cfe17fc414912c27cbe',
        ],
        features: [
          'Natural stone, brick, tile, and shiplap options',
          'Custom sizing for any fireplace opening',
          'Heat-resistant materials rated for fireplace use',
          'Matching hearth and overmantel available',
          'Seamless integration with existing architecture',
        ],
        categorySlug: 'mantels-surrounds',
      },
    ],
  },

  // ── 4. Chimney Services ───────────────────────────────────────────────────
  {
    id: 'chimney-services',
    slug: 'chimney-services',
    title: 'Chimney Services',
    services: [
      {
        id: 'chimney-relining',
        slug: 'chimney-relining',
        title: 'Chimney Relining',
        shortDescription: 'Restore your chimney\'s safety and efficiency with a new stainless steel or ceramic liner.',
        fullDescription: 'A properly lined chimney is essential for safe fireplace operation. Whether your existing liner is cracked, deteriorated, or simply absent, we install stainless steel and cast-in-place ceramic liners that meet all fire codes and dramatically improve draft performance.',
        price: 'Starting at $1,800',
        buttonText: 'COMING SOON',
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fde3662e32bbf20c79972df6871a5ed666daf56a',
        images: [
          'https://cdn.builder.io/api/v1/image/assets/TEMP/fde3662e32bbf20c79972df6871a5ed666daf56a',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/d983365fa063807b6150eaa982ec89f9349ee170',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/33a36203252ac2321c4ead5341088a22fefff5db',
        ],
        features: [
          'Stainless steel flex liner installation',
          'Cast-in-place ceramic liner option',
          'Improves draft and reduces creosote buildup',
          'Fire code compliant for all fuel types',
          'Camera inspection before and after installation',
        ],
        categorySlug: 'chimney-services',
      },
      {
        id: 'chimney-crown-repair',
        slug: 'chimney-crown-repair',
        title: 'Chimney Crown Repair',
        shortDescription: 'Stop water damage before it starts with a professionally repaired or rebuilt chimney crown.',
        fullDescription: 'The chimney crown is the first line of defense against moisture damage. A cracked or missing crown allows water to seep into the masonry, causing costly interior and exterior damage. We repair and rebuild chimney crowns using waterproof, weather-resistant concrete and sealants.',
        price: 'Starting at $600',
        buttonText: 'COMING SOON',
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d983365fa063807b6150eaa982ec89f9349ee170',
        images: [
          'https://cdn.builder.io/api/v1/image/assets/TEMP/d983365fa063807b6150eaa982ec89f9349ee170',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/fde3662e32bbf20c79972df6871a5ed666daf56a',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/33a36203252ac2321c4ead5341088a22fefff5db',
        ],
        features: [
          'Full crown replacement or crack repair',
          'Waterproof sealant application',
          'Prevents moisture intrusion and freeze-thaw damage',
          'Includes mortar joint inspection',
          'Extends chimney lifespan significantly',
        ],
        categorySlug: 'chimney-services',
      },
      {
        id: 'chimney-repointing',
        slug: 'chimney-repointing',
        title: 'Chimney Repointing',
        shortDescription: 'Restore deteriorated mortar joints to prevent water penetration and structural damage.',
        fullDescription: 'Over time, mortar joints between chimney bricks erode and crack, allowing water to penetrate the structure. Repointing (tuckpointing) removes damaged mortar and replaces it with fresh, weather-resistant mortar, restoring structural integrity and preventing costly water damage.',
        price: 'Starting at $900',
        buttonText: 'COMING SOON',
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/33a36203252ac2321c4ead5341088a22fefff5db',
        images: [
          'https://cdn.builder.io/api/v1/image/assets/TEMP/33a36203252ac2321c4ead5341088a22fefff5db',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/d983365fa063807b6150eaa982ec89f9349ee170',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/fde3662e32bbf20c79972df6871a5ed666daf56a',
        ],
        features: [
          'Full mortar joint inspection and assessment',
          'Removal of deteriorated mortar to proper depth',
          'Color-matched mortar for seamless appearance',
          'Prevents water infiltration and structural failure',
          'Includes waterproof sealant on exposed joints',
        ],
        categorySlug: 'chimney-services',
      },
      {
        id: 'chimney-service-doors-vent-covers',
        slug: 'chimney-service-doors-vent-covers',
        title: 'Chimney Service Doors & Vent Covers',
        shortDescription: 'Protect and maintain your chimney with high-quality service doors and vent covers, available in various styles.',
        fullDescription: 'Keep your chimney efficient and protected with properly fitted service doors and vent covers. We supply and install a wide range of door and cover styles in cast iron, steel, and decorative finishes to prevent drafts, debris, and moisture from entering your chimney system.',
        price: 'Starting at $400',
        buttonText: 'Get a Quote',
        imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/05d65b0161e2a0fd47f73cfe17fc414912c27cbe',
        images: [
          'https://cdn.builder.io/api/v1/image/assets/TEMP/05d65b0161e2a0fd47f73cfe17fc414912c27cbe',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/27179ae8b85bc4e386ef994ff5fbf0683762a475',
          'https://cdn.builder.io/api/v1/image/assets/TEMP/3fe1f56cc8123e69a331e6ffe982bbb00d0ad8f2',
        ],
        features: [
          'Cast iron, steel, and decorative finish options',
          'Custom sizing for non-standard openings',
          'Improves draft control and energy efficiency',
          'Pest and debris prevention',
          'Quick installation with no structural modification',
        ],
        categorySlug: 'chimney-services',
      },
    ],
  },
];

export const getAllServices = (): Service[] =>
  serviceCategories.flatMap((cat) => cat.services);

export const getServiceBySlug = (slug: string): Service | undefined =>
  getAllServices().find((s) => s.slug === slug);

export const getCategoryBySlug = (slug: string): ServiceCategory | undefined =>
  serviceCategories.find((cat) => cat.slug === slug);
