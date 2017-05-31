# oTree_LetterCount
This App allows you to create an Experiment with a Real Effort Task of Counting "a"s in a randomly generated string of characters of increasing length.

### Installation

1. In Terminal or PowerShell go to your oTree folder, for instance ```cd oTree```, and create the folder questionnaire with ```mkdir Letter_Count``` .
2. Make sure you have "numpy" installed with ```pip install numpy```
3. Define the App in settings.py with:
~~~
  SESSION_CONFIGS = [
    {
        'name': 'Letter_Count',
        'display_name': "Letter Counting",
        'num_demo_participants': 3,
        'app_sequence': ['Letter_Count'],
    },
    # other session configs go here ...
  ]
~~~
4. If you want the letter counting task as part of another game, add it to the sequence of that games app.
5. Either download or, ideally, fork this repository and add its contents to the "Letter_Counting" folder.
6. Ready! :-)
