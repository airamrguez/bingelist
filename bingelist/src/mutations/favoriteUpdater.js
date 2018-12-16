export default function favoriteUpdater(store, rootField) {
  const newFavorites = store.getPluralRootField(rootField);
  const root = store.getRoot();
  const prevFavorites = root.getLinkedRecords('favorites');
  if (prevFavorites) {
    root.setLinkedRecords(newFavorites, 'favorites');
  }
}
