window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */
                        const container = document.createElement("div");
                        container.id = movie.imdbID;

                        const title = document.createElement("h2");
                        title.textContent = movie.Title;

                        const info = document.createElement("p");
                        info.textContent = 
                            "Released: " + movie.Released + 
                            " | Runtime: " + movie.Runtime + " min";

                        const rating = document.createElement("p");
                        rating.textContent = 
                            "Metascore: " + movie.Metascore + 
                            " | IMDb: " + movie.imdbRating;

                        const genres = document.createElement("p");
                        genres.textContent = "Genres: " + movie.Genres.join(", ");

                        const img = document.createElement("img");
                        img.src = movie.Poster;

                        const plot = document.createElement("p");
                        plot.textContent = movie.Plot;


                        const directorsTitle = document.createElement("h3");
                        directorsTitle.textContent = "Directors";
                        const directorsList = document.createElement("ul");
                        movie.Directors.forEach(director => {
                            const li = document.createElement("li");
                            li.textContent = director;
                            directorsList.appendChild(li);
                        });


                        const writersTitle = document.createElement("h3");
                        writersTitle.textContent = "Writers";
                        const writersList = document.createElement("ul");
                        movie.Writers.forEach(writer => {
                            const li = document.createElement("li");
                            li.textContent = writer;
                            writersList.appendChild(li);
                        });


                        const actorsTitle = document.createElement("h3");
                        actorsTitle.textContent = "Actors";
                        const actorsList = document.createElement("ul");
                        movie.Actors.forEach(actor => {
                            const li = document.createElement("li");
                            li.textContent = actor;
                            actorsList.appendChild(li);
                        });

                        const editButton = document.createElement("button");
                        editButton.textContent = "Edit";
                        editButton.onclick = function () {
                        location.href = "edit.html?imdbID=" + movie.imdbID;
                        };
                        
                        container.appendChild(title);
                        container.appendChild(info);
                        container.appendChild(rating);
                        container.appendChild(genres);
                        container.appendChild(img);
                        container.appendChild(plot);
                        container.appendChild(editButton);
                        container.appendChild(directorsTitle);
                        container.appendChild(directorsList);
                        container.appendChild(writersTitle);
                        container.appendChild(writersList);
                        container.appendChild(actorsTitle);
                        container.appendChild(actorsList);

                        bodyElement.appendChild(container);   
      }

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
