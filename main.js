$(document).ready(function () {
  function pokemon(pokemon) {
    const namePokemon = document.querySelector("#name");
    const imagePokemon = document.querySelector("#imagePokemon");
    const weight = document.querySelector("#weight");
    const height = document.querySelector("#height");
    const imagePokemonShiny = document.querySelector("#imagePokemonShiny");
    const aboutType = document.querySelector(".aboutType");
    const movesPower = document.querySelector(".moves");

    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
      type: "GET",
      dataType: "json",
      success: function (res) {
        aboutType.innerHTML = "";
        movesPower.innerHTML = "";

        function uppercase(str) {
          return str.charAt(0).toUpperCase() + str.slice(1);
        }
        namePokemon.textContent = `${uppercase(res["name"])} #id.${res["id"]}`;
        imagePokemon.src =
          res["sprites"]["other"]["official-artwork"]["front_default"];
        imagePokemonShiny.src =
          res["sprites"]["other"]["official-artwork"]["front_shiny"];
        height.textContent = `height: ${res["height"]}`;
        weight.textContent = `weight: ${res["weight"]}`;

        let types = res["types"];
        types.forEach(function (type) {
          let li = document.createElement("li");
          li.textContent = type["type"]["name"];
          $(li).css({
            "text-decoration": "none",
            display: "flex",
            "flex-direction": "row",
          });
          if (type["type"]["name"] == "bug") {
            $(li).css({
              "background-color": "#A8B820",
              border: "1px solid black",
            });
          } else if (type["type"]["name"] == "dark") {
            $(li).css({
              "background-color": "#705848",
              border: "1px solid black",
            });
          } else if (type["type"]["name"] == "dragon") {
            $(li).css({
              "background-color": "#7038F8",
              border: "1px solid black",
            });
          } else if (type["type"]["name"] == "electric") {
            $(li).css({
              "background-color": "#F8D030",
              border: "1px solid black",
            });
          } else if (type["type"]["name"] == "fairy") {
            $(li).css({
              "background-color": "#EE99AC",
              border: "1px solid black",
            });
          } else if (type["type"]["name"] == "fighting") {
            $(li).css({
              "background-color": "#F08030",
              border: "1px solid black",
            });
          } else if (type["type"]["name"] == "fire") {
            $(li).css({
              "background-color": "#E72929",
              border: "1px solid black",
            });
          } else if (type["type"]["name"] == "flying") {
            $(li).css({
              "background-color": "#A890F0",
              border: "1px solid black",
            });
          } else if (type["type"]["name"] == "ghost") {
            $(li).css({
              "background-color": "#705898",
              border: "1px solid black",
            });
          } else if (type["type"]["name"] == "grass") {
            $(li).css({
              "background-color": "#78C850",
              border: "1px solid black",
            });
          } else if (type["type"]["name"] == "ground") {
            $(li).css({
              "background-color": "#E0C068",
              border: "1px solid black",
            });
          } else if (type["type"]["name"] == "ice") {
            $(li).css({
              "background-color": "#98D8D8",
              border: "1px solid black",
            });
          } else if (type["type"]["name"] == "normal") {
            $(li).css({
              "background-color": "#A8A878",
              border: "1px solid black",
            });
          } else if (type["type"]["name"] == "poison") {
            $(li).css({
              "background-color": "#A040A0",
              border: "1px solid black",
            });
          } else if (type["type"]["name"] == "psychic") {
            $(li).css({
              "background-color": "#F85888",
              border: "1px solid black",
            });
          } else if (type["type"]["name"] == "rock") {
            $(li).css({
              "background-color": "#B8A038",
              border: "1px solid black",
            });
          } else if (type["type"]["name"] == "steel") {
            $(li).css({
              "background-color": "#B8B8D0",
              border: "1px solid black",
            });
          } else if (type["type"]["name"] == "water") {
            $(li).css({
              "background-color": "#6890F0",
              border: "1px solid black",
            });
          } else {
            $(li).css({
              "background-color": "white",
              border: "1px solid black",
            });
          }
          aboutType.append(li);
        });
        let status = res["stats"];
        let typePower = document.getElementsByClassName("progress");
        status.forEach(function (stat, index) {
          let baseStat = stat["base_stat"];
          let name = stat["stat"]["name"];
          typePower[index].textContent = name + ": " + baseStat;
        });

        let moves = res["moves"];
        let numMoves = Math.min(moves.length, 12);
        for (let i = 0; i < numMoves; i++) {
          let mv = moves[i];
          let move = mv["move"]["name"];
          let li = document.createElement("li");
          li.textContent = move;

          let urlTypeMove = mv["move"]["url"];
          $.ajax({
            url: urlTypeMove,
            type: "GET",
            dataType: "json",
            success: function (resquest) {
              let typeMove = resquest["type"]["name"];
              $(li).css({
                "text-decoration": "none",
                display: "inline-block",
                "flex-direction": "row",
                width: "auto",
                height: "auto",
              });
              if (typeMove === "bug") {
                $(li).css({
                  "background-color": "#A8B820",
                  border: "1px solid black",
                });
              } else if (typeMove === "dark") {
                $(li).css({
                  "background-color": "#705848",
                  border: "1px solid black",
                });
              } else if (typeMove === "dragon") {
                $(li).css({
                  "background-color": "#7038F8",
                  border: "1px solid black",
                });
              } else if (typeMove === "electric") {
                $(li).css({
                  "background-color": "#F8D030",
                  border: "1px solid black",
                });
              } else if (typeMove === "fairy") {
                $(li).css({
                  "background-color": "#EE99AC",
                  border: "1px solid black",
                });
              } else if (typeMove === "fighting") {
                $(li).css({
                  "background-color": "#F08030",
                  border: "1px solid black",
                });
              } else if (typeMove === "fire") {
                $(li).css({
                  "background-color": "#E72929",
                  border: "1px solid black",
                });
              } else if (typeMove === "flying") {
                $(li).css({
                  "background-color": "#A890F0",
                  border: "1px solid black",
                });
              } else if (typeMove === "ghost") {
                $(li).css({
                  "background-color": "#705898",
                  border: "1px solid black",
                });
              } else if (typeMove === "grass") {
                $(li).css({
                  "background-color": "#78C850",
                  border: "1px solid black",
                });
              } else if (typeMove === "ground") {
                $(li).css({
                  "background-color": "#E0C068",
                  border: "1px solid black",
                });
              } else if (typeMove === "ice") {
                $(li).css({
                  "background-color": "#98D8D8",
                  border: "1px solid black",
                });
              } else if (typeMove === "normal") {
                $(li).css({
                  "background-color": "#A8A878",
                  border: "1px solid black",
                });
              } else if (typeMove === "poison") {
                $(li).css({
                  "background-color": "#A040A0",
                  border: "1px solid black",
                });
              } else if (typeMove === "psychic") {
                $(li).css({
                  "background-color": "#F85888",
                  border: "1px solid black",
                });
              } else if (typeMove === "rock") {
                $(li).css({
                  "background-color": "#B8A038",
                  border: "1px solid black",
                });
              } else if (typeMove === "steel") {
                $(li).css({
                  "background-color": "#B8B8D0",
                  border: "1px solid black",
                });
              } else if (typeMove === "water") {
                $(li).css({
                  "background-color": "#6890F0",
                  border: "1px solid black",
                });
              } else {
                $(li).css({
                  "background-color": "white",
                  border: "1px solid black",
                });
              }
              movesPower.append(li);
            },
            error: function () {
              alert(ola);
            },
          });
        }
      },
      error: function () {
        alert(
          "Erro ao carregar os dados do Pokémon. Verifique o nome inserido."
        );
      },
    });
  }
  pokemon("bulbasaur");
  $("#btn_search").click(function (event) {
    event.preventDefault();
    const textId = document.querySelector("#nameid").value;
    pokemon(textId);
  });
});
