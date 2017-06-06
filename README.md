# oTree_LetterCount
This App allows you to create an Experiment with a Real Effort Task of Counting "a"s in a randomly generated string of characters of increasing length.

### Installation

1. In Terminal or PowerShell go to your oTree folder, for instance ```cd oTree```, and create the folder questionnaire with ```mkdir Letter_Count``` .
<<<<<<< HEAD
2. Make sure you have "numpy" installed with ```pip install numpy``` or ```pip3 install numpy``` if you use Python 3.
3. Define the App in settings.py with:
=======
1. Make sure you have "numpy" installed with ```pip install numpy``` or ```pip3 install numpy``` if you use Python 3.
1. Define the App in settings.py with:
>>>>>>> master
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
1. Change the points name to tokens in settings with ```POINTS_CUSTOM_NAME = 'tokens'```
1. Either download or, ideally, fork this repository and add its contents to the "Letter_Counting" folder.
1. This app is optimized for Chrome.
1. Ready! :-)
