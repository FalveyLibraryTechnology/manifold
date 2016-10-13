namespace Manifold {
    export class MetadataGroup {
        public resource: Manifesto.IManifestResource;
        public label: string;
        public items: MetadataItem[] = [];

        constructor(resource: Manifesto.IManifestResource, label?: string) {
            this.resource = resource;
            this.label = label;
        }

        public addItem(item: MetadataItem): void {
            this.items.push(item);
        }

        public addMetadata(metadata: any[], isRootLevel: boolean = false): void {
            for (var i = 0; i < metadata.length; i++) {
                var item: any = metadata[i];
                var metadataItem: MetadataItem = new MetadataItem(item.label, item.value);
                metadataItem.isRootLevel = isRootLevel;
                this.addItem(metadataItem);
            }
        }
    }
}