from __future__ import division

import random

import numpy as np

import otree.models
from otree.db import models
from otree import widgets
from otree.common import Currency as c, currency_range, safe_json
from otree.constants import BaseConstants
from otree.models import BaseSubsession, BaseGroup, BasePlayer


author = 'Kathi'

doc = """
Letter Counting Task - Control Group
"""


class Constants(BaseConstants):
    name_in_url = 'Letter_Count'
    players_per_group = 2
    num_rounds = 1

    t = 20

# this defines and describes the payment methods. Make sure, the name of "Token" is defined in settings.py
    eurosper_token = 0.10
    tokensper_string = c(10)
    secondsper_token = 10

    # Define and describe tech increases and switch methods
    char_increase = 4

class Subsession(BaseSubsession):
    pass


class Group(BaseGroup):
    pass


class Player(BasePlayer):
    output0 = models.PositiveIntegerField()
    output1 = models.PositiveIntegerField()
    output2 = models.PositiveIntegerField()
    output3 = models.PositiveIntegerField()
    output4 = models.PositiveIntegerField()
    output5 = models.PositiveIntegerField()
    output6 = models.PositiveIntegerField()
    output7 = models.PositiveIntegerField()
    output8 = models.PositiveIntegerField()
