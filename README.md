# rafaelnmo.github.io

Personal website, built by GitHub Pages with Jekyll on every push to `master`.

## Where things live

| To change…                                  | Edit                         |
| ------------------------------------------- | ---------------------------- |
| Location, email, LinkedIn, GitHub, photo    | `_config.yml` (`author:`)    |
| Publications (cards, venue, DOI)            | `_data/research.yml`         |
| Projects                                    | `_data/projects.yml`         |
| Expertise cards (home page)                 | `_data/expertise.yml`        |
| Core competencies (experience page)         | `_data/competencies.yml`     |
| Tools / skill tags                          | `_data/skills.yml`           |
| Experience timeline                         | `_data/timeline.yml`         |
| Menu, footer, page `<head>`                 | `_includes/`                 |
| Article page frame (title, DOI box, pager)  | `_layouts/article.html`      |
| Styles / scripts                            | `css/style.css`, `js/main.js`|

## Adding a publication

1. Add an entry at the top of `_data/research.yml` (newest first).
2. Create `<slug>.html` in the root with just the article text:

   ```html
   ---
   layout: article
   ---
   <p>Summary of the paper…</p>
   <figure class="figure">
       <div class="figure__frame">
           <img src="images/research/<folder>/figure.png" alt="" loading="lazy">
       </div>
       <figcaption>Fig. 1 …</figcaption>
   </figure>
   ```

It then shows up on the research page, on the home page (latest three) and
in the newer/older links. Projects work the same way with `_data/projects.yml`.

## Preview locally

```sh
gem install jekyll -v 3.10.0 webrick
jekyll serve
```

Then open http://localhost:4000. (Opening the `.html` files directly in the
browser won't work any more: the pages are assembled by Jekyll.)
