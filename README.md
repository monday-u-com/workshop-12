# React Hooks Workshop - Favorite Pokemon

## Running the app

Presentation link - https://docs.google.com/presentation/d/1s3cT0Q6swIHMuECF7k1xh0VBsmKUhQR5iMQVu2Dfpzs

To run the app:

> `npm i --force`
>
> `npm start`

![Screen Recording 2022-06-19 at 18 50 39](https://user-images.githubusercontent.com/65164924/174489650-3e64d3c1-c9f7-4f46-bb30-3a5ea409bd90.gif)

## Tasks

#### useClickOutside

Search for `TODO 1` in the code, currently the dialog of choosing a pokemon will close only if you'll click a pokemon or the close button, implement `useClickOutside` and use it so any click outside of the modal will close it

#### useIsMounted

Search for `TODO 2` in the code, currently your app can encounter some exception, if you'll start a search and close it before the request is over, react will try to update an unmounted component state and fail and that will cause an exception, implement `useIsMounted` to make this exception to go away

![image](https://user-images.githubusercontent.com/65164924/174626589-033fbcf7-cc92-45ba-b64a-375cf1692fc9.png)

#### useLocalStorage

Search for `TODO 3` in the code, currently after every refresh your favorite pokemomn reset to pikachu, implement `useLocalStorage` to save your choice on the local storage

#### useDebounce

Search for `TODO 4` in the code, currently on any change of the search a request is sent, implement `useDebounce` to [debounce](https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086) the search text in order to solve that and reduce unnecessary requests
![Screen Recording 2022-06-19 at 19 03 56](https://user-images.githubusercontent.com/65164924/174489980-daad1c80-73e4-40d2-a155-bb6b51af35be.gif)

#### Bonus

Search for `TODO 5` in the code, You'll see a console.log that indicates that one of our components re-renders a lot without a reason, fix those re-renders using the tools you got in the lecture.








#### Solution
If needed, you can find the workshop solution [here](https://github.com/monday-u-com/workshop-12/pull/2)
