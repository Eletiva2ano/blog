function initGrid() {
  document.querySelectorAll('.dream-grid').forEach((grid) => {
    const msnry = new Masonry(grid, {
      itemSelector: '.dream-column',
      // Animating card transforms on relayout (Masonry's default) can shift a
      // card out from under the cursor between mousedown and click, silently
      // swallowing the click. Relayout instantly instead.
      transitionDuration: 0,
    })

    if (grid.classList.contains('dream-grid-about')) {
      // Export Masonry instance to global scope for about page,
      // currently used for resizing the grid after Disqus comments are loaded.
      window.aboutMasonry = msnry
    }

    imagesLoaded(grid, () => {
      grid.style.opacity = 1
      msnry.layout()
    })
  })
}

initGrid()
