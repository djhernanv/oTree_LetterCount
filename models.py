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
    name_in_url = 'Letter Counting'
    players_per_group = 2
    num_rounds = 1

    t = 20

    sequences_0 = ["atdpsiwrar", "dyshafudak", "yavaksvnsm", "vhgqgqakwf", "dmjlazjena", "aimrodkuap", "rssgragaza",
                   "dakhzwxpgo", "tnrabmcfob", "rtqonabnva", "laaaaxzpcx", "fawykauoyp", "wxsrcqaaqa", "abankaqaeb",
                   "dptxbeivua", "iranbgtadl", "uxcyvabfro", "hjanyeqphq", "nierfauala", "paqzfwdran", "alsiaauhkh",
                   "patpaizgnj", "allsfdhogg", "apanslapij", "afvaepchfp", "htuaqaatai", "vaxvyhafpa", "vqaobwyfan",
                   "wtjaaekysg", "qaaghrzbhu"]
    solutions_0 = [2, 2, 2, 1, 2, 2, 3, 1, 1, 2, 4, 2, 3, 4, 1, 2, 1, 1, 3, 2, 3, 2, 1, 3, 2, 4, 3, 2, 2, 2]


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