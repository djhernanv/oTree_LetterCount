from __future__ import division

from otree.common import Currency as c, currency_range, safe_json

from . import models
from ._builtin import Page, WaitPage
from .models import Constants


class Welcome(Page):
    pass

class Welcome_wait(WaitPage):
    #template_name = 'Letter_Count/Welcome_wait.html'
    def after_all_players_arrive(self):
        pass

class Introduction(Page):
    pass

class Task_Instructions(Page):
    pass

class Switch_Instructions(Page):
    pass

class Technology_Instructions(Page):
    pass

class Competition_Instructions_1(Page):
    pass

class Competition_Instructions_2_Example(Page):
    pass

class Competition_Instructions_3(Page):
    pass

class Beliefs(Page):
    form_model = models.Player
    form_fields = ['output0','output1','output2']

class Questionnaire(Page):
    pass

class Thank_you(Page):
    pass

class Round0(Page):
    timeout_seconds = 400
    form_model = models.Player
    form_fields = ['output0']

class Round1(Page):
    timeout_seconds = 240
    form_model = models.Player
    form_fields = ['output1']

class Round2(Page):
    timeout_seconds = Constants.t


class Round3(Page):
    timeout_seconds = Constants.t


class Round4a(Page):
    timeout_seconds = Constants.t


class Round4b(Page):
    timeout_seconds = Constants.t


class Round5a(Page):
    timeout_seconds = Constants.t


class Round5b(Page):
    timeout_seconds = Constants.t


class Round6a(Page):
    timeout_seconds = Constants.t


class Round6b(Page):
    timeout_seconds = Constants.t


class Round7a(Page):
    timeout_seconds = Constants.t


class Round7b(Page):
    timeout_seconds = Constants.t


class Round8a(Page):
    timeout_seconds = Constants.t


class Round8b(Page):
    timeout_seconds = Constants.t


class Feedback_Round0(Page):
    pass

class Feedback_Round1(Page):
    pass

class Feedback_Round2(Page):
    pass

class Feedback_Round3(Page):
    timeout_seconds = 120

class Feedback_Round4(Page):
    timeout_seconds = 120

class Feedback_Round5(Page):
    timeout_seconds = 120

class Feedback_Round6(Page):
    timeout_seconds = 120

class Feedback_Round7(Page):
    timeout_seconds = 120

class Feedback_Round8(Page):
    pass

class FeedbackC2(Page):
    pass

class FeedbackF2(Page):
    pass

class Switch(WaitPage):
    body_text = "You are now in the switch mode."

page_sequence = [
#    Welcome,
#    Welcome_wait,
    Introduction,
    Task_Instructions,
#    Round0,
#    Feedback_Round0,
    Switch_Instructions,
#    Round1,
#    Feedback_Round1,
#    Technology_Instructions,
#    Round2,
#    Feedback_Round2,
#    Competition_Instructions_1,
#    Competition_Instructions_2_Example,
#    Competition_Instructions_3,
#    Beliefs,
#    Round3,
#    Feedback_Round3,
#    Beliefs,
#    Round4,
#    Feedback_Round4,
#    Beliefs,
#    Round5,
#    Feedback_Round5,
#    Beliefs,
#    Round6,
#    Feedback_Round6,
#    Beliefs,
#    Round7,
#    Feedback_Round7,
#    Beliefs,
#    Round8,
#    Feedback_Round8,
    Questionnaire,
    Thank_you,
]
