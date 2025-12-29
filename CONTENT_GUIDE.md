# Content Management Guide

This guide explains how to add and manage content on your dashboard.

---

## Profile Quote

### File Location
`/app.js` - in the `CONFIG.profile` section

### How to Change Quote

1. Open `app.js`
2. Find the `profile` section (around line 20-26)
3. Change the `quote` value:

```javascript
profile: {
    name: 'Ghoibov Dokha',
    role: 'Backend Developer',
    timezone: 'UTC+3',
    avatar: 'https://avatars.githubusercontent.com/u/0?v=4',
    quote: 'your new quote here',  // <-- Change this
},
```

### Examples

```javascript
quote: 'with great power comes great responsibility'
quote: 'Code is poetry'
quote: 'Stay hungry, stay foolish'
quote: ''  // Empty string to hide quote
```

---

## Books

### File Location
`/data/books.json`

### Structure

The file has three sections:
- `reading` - books you're currently reading
- `finished` - books you've completed
- `dropped` - books you stopped reading

### Adding a New Book

#### Currently Reading
```json
{
  "reading": [
    {
      "id": "unique-id-1",
      "title": "Book Title",
      "original_title": null,
      "authors": ["Author Name"],
      "year": 2024,
      "cover_url": "https://example.com/cover.jpg",
      "status": "reading",
      "started_at": "2024-12-01",
      "finished_at": null,
      "progress": {
        "type": "percent",
        "current": 45,
        "total": 100
      },
      "rating": null,
      "tags": ["fiction", "sci-fi"],
      "note": "My thoughts so far...",
      "links": {
        "primary": "https://amazon.com/book-link"
      }
    }
  ]
}
```

#### Finished Book
```json
{
  "finished": [
    {
      "id": "unique-id-2",
      "title": "Completed Book",
      "authors": ["Author Name"],
      "year": 2023,
      "cover_url": "https://example.com/cover.jpg",
      "status": "finished",
      "started_at": "2024-10-01",
      "finished_at": "2024-11-15",
      "progress": {
        "type": "percent",
        "current": 100,
        "total": 100
      },
      "rating": 5,
      "tags": ["non-fiction", "tech"],
      "note": "Great book! Highly recommend.",
      "links": {
        "primary": "https://amazon.com/book-link"
      }
    }
  ]
}
```

### Marking a Book as Finished

1. Move the book object from `reading` array to `finished` array
2. Update these fields:
   - `status`: change from `"reading"` to `"finished"`
   - `finished_at`: add the completion date `"2024-12-29"`
   - `progress.current`: set to `100`
   - `rating`: add your rating (1-5)

### Progress Types

```json
// Percentage
"progress": {
  "type": "percent",
  "current": 65,
  "total": 100
}

// Pages
"progress": {
  "type": "pages",
  "current": 150,
  "total": 400
}
```

### Where to Find Book Covers

- Amazon: Right-click on book cover → Copy image address
- Google Books: Search book → Images
- Open Library: https://openlibrary.org (free covers)

---

## Movies & Series

### File Location
`/data/movies.json`

### Structure

The file has sections:
- `watching` - currently watching series
- `watched` - completed movies/series
- `dropped` - stopped watching
- `on_hold` - paused

### Adding a Movie

```json
{
  "watched": [
    {
      "id": "movie-1",
      "type": "movie",
      "title": "Movie Title",
      "original_title": null,
      "year": 2024,
      "poster_url": "https://example.com/poster.jpg",
      "status": "watched",
      "watched_at": "2024-12-25",
      "progress": null,
      "rating": 8.5,
      "genres": ["Action", "Sci-Fi"],
      "tags": ["favorite"],
      "note": "Amazing visuals!",
      "external_ids": {
        "tmdb": 123456,
        "imdb": "tt1234567"
      },
      "links": {
        "primary": "https://imdb.com/title/tt1234567"
      }
    }
  ]
}
```

### Adding a Series (Currently Watching)

```json
{
  "watching": [
    {
      "id": "series-1",
      "type": "series",
      "title": "Series Title",
      "year": 2023,
      "poster_url": "https://example.com/poster.jpg",
      "status": "watching",
      "watched_at": null,
      "progress": {
        "season": 2,
        "episode": 5,
        "episodes_watched": 15,
        "episodes_total": 24
      },
      "rating": 9.0,
      "genres": ["Drama", "Thriller"],
      "tags": [],
      "note": null,
      "external_ids": {
        "tmdb": 654321,
        "imdb": "tt7654321"
      },
      "links": {
        "primary": "https://imdb.com/title/tt7654321"
      }
    }
  ]
}
```

### Marking Series as Finished

1. Move from `watching` to `watched`
2. Update:
   - `status`: `"watching"` → `"watched"`
   - `watched_at`: add date `"2024-12-29"`
   - `progress.episodes_watched`: set equal to `episodes_total`

### Updating Episode Progress

Just update the `progress` object:
```json
"progress": {
  "season": 3,
  "episode": 2,
  "episodes_watched": 22,
  "episodes_total": 30
}
```

### Where to Find Posters

- **TMDB** (recommended): https://www.themoviedb.org
  - Search movie/series → Click → Right-click poster → Copy image address
- **IMDB**: https://www.imdb.com
- **Kinopoisk**: https://www.kinopoisk.ru

### Finding TMDB/IMDB IDs

1. Go to https://www.themoviedb.org
2. Search for movie/series
3. The ID is in the URL: `themoviedb.org/movie/872585` → ID is `872585`

For IMDB:
1. Go to https://www.imdb.com
2. Search and open the title
3. The ID is in the URL: `imdb.com/title/tt15398776` → ID is `tt15398776`

---

## Quick Examples

### Books (Open Library - by ISBN)

Books are synced via **Open Library**. Just add the ISBN - title, author, and cover are fetched automatically!

#### Add a book

Add to `CONFIG.books.reading` or `CONFIG.books.finished` in `/app.js`:

```javascript
books: {
    useOpenLibrary: true,
    reading: [
        '9780735211292',  // Just ISBN - simplest way
        '9780134494166',
    ],
    finished: [
        '9780135957059',
        '9781449373320',
    ],
},
```

#### With progress or rating (optional)

```javascript
reading: [
    '9780735211292',  // without progress
    { isbn: '9780134494166', progress: 45 },  // with progress %
],
finished: [
    '9780135957059',  // without rating
    { isbn: '9781449373320', rating: 5 },  // with rating (1-5 stars)
],
```

#### How to find ISBN:
1. **Amazon** → Book page → Scroll to "Product details" → ISBN-13
2. **Google** → Search "book name ISBN"
3. **Open Library** → https://openlibrary.org → Search → ISBN on book page

ISBN-13 format: 13 digits starting with `978` or `979`

---

### Movies & Series (TMDB - synced from lists)

Movies are synced from your **TMDB lists**. Just add movies on the TMDB website!

1. Go to https://www.themoviedb.org
2. Search for movie/series
3. Click "Add to List"
4. Choose "Watching" or "Watched"

The dashboard will automatically sync.

#### TMDB List IDs (in CONFIG.tmdb):
- `watchingListId`: Your "Watching" list
- `watchedListId`: Your "Watched" list

---

### Manual fallback (MOCK_DATA)

If APIs fail, the dashboard uses `MOCK_DATA` as fallback.

#### Add a movie manually

Add to `MOCK_DATA.movies.watched` array in `/app.js`:
```javascript
{
    title: 'Inception',
    year: 2010,
    type: 'movie',
    poster: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Ber.jpg',
    rating: 9.5,
    imdb_id: 'tt1375666',
},
```

---

## Where to Find Links

### Book Links
- **Amazon**: Search book → copy URL from address bar
- **Goodreads**: https://www.goodreads.com → search → copy URL

### Movie/Series IMDB IDs
1. Go to https://www.imdb.com
2. Search and open the title
3. Copy ID from URL: `imdb.com/title/tt15398776` → `tt15398776`

### Cover Images
- **Books**: Amazon product page → right-click cover → "Copy image address"
- **Movies**: TMDB (https://www.themoviedb.org) → search → right-click poster

---

## Tips

1. **Rating scale**: Books use 1-5 stars, Movies use 1-10
2. **Cover images**: Use direct image URLs (ending with `.jpg` or `.png`)
3. **IMDB ID format**: Always starts with `tt` followed by numbers
4. **Book links**: Can be Amazon, Goodreads, or any URL
5. **Progress for series**: Use format like `S2E5` (Season 2, Episode 5)
