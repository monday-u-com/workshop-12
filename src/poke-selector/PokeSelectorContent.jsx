import { Flex, Search, Heading } from "monday-ui-react-core";
import React, { useCallback, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import PokemonDetails from "./pokemon-details/PokemonDetails";
import { useHoveredPokemon } from "./useHoveredPokemon";
import { usePokeSearch } from "./usePokeSearch";

const DEBOUNCE_RATE_MS = 200;

const PokeSelectorContent = React.memo(({ onSelection }) => {
  const [searchInput, setSearchInput] = useState("");

  const debouncedSearchInput = useDebounce(searchInput, DEBOUNCE_RATE_MS);

  const { searchResults, isLoading } = usePokeSearch(debouncedSearchInput);

  const isSearching = Boolean(debouncedSearchInput);
  const hasResults = searchResults.length !== 0;

  const isSearchingWithoutResults = isSearching && !hasResults;
  const hasSearchResults = isSearching && hasResults;

  const onSearchChange = useCallback((value) => {
    setSearchInput(value);
  }, []);

  const onPokeSelected = useCallback(
    (id) => {
      const details = searchResults.find(
        (pokeDetails) => id === pokeDetails.id
      );
      onSelection(details);
    },
    [onSelection, searchResults]
  );

  const { hoveredTypeText, onPokeHovered, resetHoveredPoke } =
    useHoveredPokemon(searchResults);

  //TODO 5: Search for this log in the browser devtools, you can see that this function rerenders every second even when nothing changes
  //        avoid those unnecessary re-renders using the tools you got in the lecture.
  console.log("rerendering pokemonSelectorContent");

  return (
    <Flex direction={Flex.directions.COLUMN} className="poke-selector-content">
      <Search
        placeholder="Search Pokémons!"
        loading={isLoading}
        size={Search.sizes.LARGE}
        onChange={onSearchChange}
        // Override the default value, which is 200. We want to implement it ourselves! :)
        debounceRate={0}
      />
      {!isLoading && (
        <>
          <Flex
            wrap={true}
            className="poke-details-container"
            gap={Flex.gaps.SMALL}
            justify={Flex.justify.SPACE_BETWEEN}
          >
            {isSearchingWithoutResults && <h6>No Pokémons found :(</h6>}

            {hasSearchResults &&
              searchResults.map((details) => (
                <PokemonDetails
                  key={details.id}
                  {...details}
                  onSelection={onPokeSelected}
                  onHover={onPokeHovered}
                  onMouseOut={resetHoveredPoke}
                />
              ))}
          </Flex>
          {hasSearchResults && (
            <Heading type={Heading.types.h1} value={hoveredTypeText} />
          )}
        </>
      )}
    </Flex>
  );
});

export default PokeSelectorContent;
