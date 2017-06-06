from __future__ import division

import random

import numpy as np

import otree.models
from otree.db import models
from otree import widgets
from otree.common import Currency as c, currency_range, safe_json
from otree.constants import BaseConstants
from otree.models import BaseSubsession, BaseGroup, BasePlayer

author = 'AS,GS,HV,KS'

doc = """
Letter Counting Task - Control Group
"""


class Constants(BaseConstants):
    name_in_url = 'Letter_Count'
<<<<<<< HEAD
    players_per_group = 5
=======
    players_per_group = 2
>>>>>>> master
    num_rounds = 1

    # this defines and describes the payment methods. Make sure, the name of "Token" is defined in settings.py
    t = 20
    tf = 10
    tokensper_string = c(1)
    eurosper_token = 0.10
    secondsper_token = 10

<<<<<<< HEAD
    # Define and describe tech increases and switch methods
    char_increase1 = 2
    char_increase2 = 4
=======
# this defines and describes the payment methods. Make sure, the name of "Token" is defined in settings.py
    eurosper_token = 0.10
    tokensper_string = c(10)
    secondsper_token = 10
>>>>>>> master

    # Define and describe tech increases and switch methods
    char_increase = 4

class Subsession(BaseSubsession):
    pass


class Group(BaseGroup):
    groupoutput3 = models.PositiveIntegerField()
    groupoutput4 = models.PositiveIntegerField()
    groupoutput5 = models.PositiveIntegerField()
    groupoutput6 = models.PositiveIntegerField()
    groupoutput7 = models.PositiveIntegerField()
    groupoutput8 = models.PositiveIntegerField()

    def set_output3(self):
        self.groupoutput3 = sum([p.output3 for p in self.get_players()])
        if self.groupoutput3 == 0:
            for p in self.get_players():
                p.share3 = 0.2
        else:
            for p in self.get_players():
                p.share3 = p.output3 / self.groupoutput3

    def set_output4(self):
        self.groupoutput4 = sum([p.output4 for p in self.get_players()])
        for p in self.get_players():
            p.share4 = p.output4 / self.groupoutput4

    def set_output5(self):
        self.groupoutput5 = sum([p.output5 for p in self.get_players()])
        for p in self.get_players():
            p.share5 = p.output5 / self.groupoutput5

    def set_output6(self):
        self.groupoutput6 = sum([p.output for p in self.get_players()])
        for p in self.get_players():
            p.share6 = p.output6 / self.groupoutput6

    def set_output7(self):
        self.groupoutput7 = sum([p.output7 for p in self.get_players()])
        for p in self.get_players():
            p.share7 = p.output7 / self.groupoutput7

    def set_output8(self):
        self.groupoutput8 = sum([p.output8 for p in self.get_players()])
        for p in self.get_players():
            p.share8 = p.output8 / self.groupoutput8


class Player(BasePlayer):
<<<<<<< HEAD
    output = models.PositiveIntegerField()
=======

    #This defines the choices for the Questionnaire
    luck = models.PositiveIntegerField(
        choices=[
            [1, 'Not at all'],
            [2, ''],
            [3, ''],
            [4, ''],
            [5, ''],
            [6, ''],
            [7, ''],
            [8, ''],
            [9, ''],
            [10, ''],
        ],
        # horizontal radio button instead of selection
        widget=widgets.RadioSelectHorizontal()
    )
    #This defines the choices for the Questionnaire
    skill = models.PositiveIntegerField(
        choices=[
            [1, '1'],
            [2, '2'],
            [3, '3'],
            [4, '4'],
            [5, '5'],
            [6, '6'],
            [7, '7'],
            [8, '8'],
            [9, '9'],
            [10, '10'],
        ],
        # horizontal radio button instead of selection
        widget=widgets.RadioSelectHorizontal()
    )

>>>>>>> master
    output0 = models.PositiveIntegerField()
    output1 = models.PositiveIntegerField()
    output2 = models.PositiveIntegerField()
    output3 = models.PositiveIntegerField()
    output4 = models.PositiveIntegerField()
    output5 = models.PositiveIntegerField()
    output6 = models.PositiveIntegerField()
    output7 = models.PositiveIntegerField()
    output8 = models.PositiveIntegerField()
<<<<<<< HEAD
    share3 = models.FloatField()
    share4 = models.FloatField()
    share5 = models.FloatField()
    share6 = models.FloatField()
    share7 = models.FloatField()
    share8 = models.FloatField()
    t001 = models.CharField()
    t002 = models.CharField()
    t003 = models.CharField()
    t004 = models.CharField()
    t005 = models.CharField()
    t101 = models.CharField()
    t102 = models.CharField()
    t103 = models.CharField()
    t104 = models.CharField()
    t105 = models.CharField()
    t106 = models.CharField()
    t107 = models.CharField()
    t108 = models.CharField()
    t109 = models.CharField()
    t110 = models.CharField()
    t111 = models.CharField()
    t112 = models.CharField()
    t113 = models.CharField()
    t114 = models.CharField()
    t115 = models.CharField()
    t116 = models.CharField()
    t117 = models.CharField()
    t118 = models.CharField()
    t119 = models.CharField()
    t120 = models.CharField()
    t121 = models.CharField()
    t122 = models.CharField()
    t123 = models.CharField()
    t124 = models.CharField()
    t125 = models.CharField()
    t126 = models.CharField()
    t127 = models.CharField()
    t128 = models.CharField()
    t129 = models.CharField()
    t130 = models.CharField()
    t201 = models.CharField()
    t202 = models.CharField()
    t203 = models.CharField()
    t204 = models.CharField()
    t205 = models.CharField()
    t206 = models.CharField()
    t207 = models.CharField()
    t208 = models.CharField()
    t209 = models.CharField()
    t210 = models.CharField()
    t211 = models.CharField()
    t212 = models.CharField()
    t213 = models.CharField()
    t214 = models.CharField()
    t215 = models.CharField()
    t216 = models.CharField()
    t217 = models.CharField()
    t218 = models.CharField()
    t219 = models.CharField()
    t220 = models.CharField()
    t221 = models.CharField()
    t222 = models.CharField()
    t223 = models.CharField()
    t224 = models.CharField()
    t225 = models.CharField()
    t226 = models.CharField()
    t227 = models.CharField()
    t228 = models.CharField()
    t229 = models.CharField()
    t230 = models.CharField()
    t301 = models.CharField()
    t302 = models.CharField()
    t303 = models.CharField()
    t304 = models.CharField()
    t305 = models.CharField()
    t306 = models.CharField()
    t307 = models.CharField()
    t308 = models.CharField()
    t309 = models.CharField()
    t310 = models.CharField()
    t311 = models.CharField()
    t312 = models.CharField()
    t313 = models.CharField()
    t314 = models.CharField()
    t315 = models.CharField()
    t316 = models.CharField()
    t317 = models.CharField()
    t318 = models.CharField()
    t319 = models.CharField()
    t320 = models.CharField()
    t321 = models.CharField()
    t322 = models.CharField()
    t323 = models.CharField()
    t324 = models.CharField()
    t325 = models.CharField()
    t326 = models.CharField()
    t327 = models.CharField()
    t328 = models.CharField()
    t329 = models.CharField()
    t330 = models.CharField()
    t401 = models.CharField()
    t402 = models.CharField()
    t403 = models.CharField()
    t404 = models.CharField()
    t405 = models.CharField()
    t406 = models.CharField()
    t407 = models.CharField()
    t408 = models.CharField()
    t409 = models.CharField()
    t410 = models.CharField()
    t411 = models.CharField()
    t412 = models.CharField()
    t413 = models.CharField()
    t414 = models.CharField()
    t415 = models.CharField()
    t416 = models.CharField()
    t417 = models.CharField()
    t418 = models.CharField()
    t419 = models.CharField()
    t420 = models.CharField()
    t421 = models.CharField()
    t422 = models.CharField()
    t423 = models.CharField()
    t424 = models.CharField()
    t425 = models.CharField()
    t426 = models.CharField()
    t427 = models.CharField()
    t428 = models.CharField()
    t429 = models.CharField()
    t430 = models.CharField()
    t501 = models.CharField()
    t502 = models.CharField()
    t503 = models.CharField()
    t504 = models.CharField()
    t505 = models.CharField()
    t506 = models.CharField()
    t507 = models.CharField()
    t508 = models.CharField()
    t509 = models.CharField()
    t510 = models.CharField()
    t511 = models.CharField()
    t512 = models.CharField()
    t513 = models.CharField()
    t514 = models.CharField()
    t515 = models.CharField()
    t516 = models.CharField()
    t517 = models.CharField()
    t518 = models.CharField()
    t519 = models.CharField()
    t520 = models.CharField()
    t521 = models.CharField()
    t522 = models.CharField()
    t523 = models.CharField()
    t524 = models.CharField()
    t525 = models.CharField()
    t526 = models.CharField()
    t527 = models.CharField()
    t528 = models.CharField()
    t529 = models.CharField()
    t530 = models.CharField()
    t601 = models.CharField()
    t602 = models.CharField()
    t603 = models.CharField()
    t604 = models.CharField()
    t605 = models.CharField()
    t606 = models.CharField()
    t607 = models.CharField()
    t608 = models.CharField()
    t609 = models.CharField()
    t610 = models.CharField()
    t611 = models.CharField()
    t612 = models.CharField()
    t613 = models.CharField()
    t614 = models.CharField()
    t615 = models.CharField()
    t616 = models.CharField()
    t617 = models.CharField()
    t618 = models.CharField()
    t619 = models.CharField()
    t620 = models.CharField()
    t621 = models.CharField()
    t622 = models.CharField()
    t623 = models.CharField()
    t624 = models.CharField()
    t625 = models.CharField()
    t626 = models.CharField()
    t627 = models.CharField()
    t628 = models.CharField()
    t629 = models.CharField()
    t630 = models.CharField()
    t701 = models.CharField()
    t702 = models.CharField()
    t703 = models.CharField()
    t704 = models.CharField()
    t705 = models.CharField()
    t706 = models.CharField()
    t707 = models.CharField()
    t708 = models.CharField()
    t709 = models.CharField()
    t710 = models.CharField()
    t711 = models.CharField()
    t712 = models.CharField()
    t713 = models.CharField()
    t714 = models.CharField()
    t715 = models.CharField()
    t716 = models.CharField()
    t717 = models.CharField()
    t718 = models.CharField()
    t719 = models.CharField()
    t720 = models.CharField()
    t721 = models.CharField()
    t722 = models.CharField()
    t723 = models.CharField()
    t724 = models.CharField()
    t725 = models.CharField()
    t726 = models.CharField()
    t727 = models.CharField()
    t728 = models.CharField()
    t729 = models.CharField()
    t730 = models.CharField()
    t801 = models.CharField()
    t802 = models.CharField()
    t803 = models.CharField()
    t804 = models.CharField()
    t805 = models.CharField()
    t806 = models.CharField()
    t807 = models.CharField()
    t808 = models.CharField()
    t809 = models.CharField()
    t810 = models.CharField()
    t811 = models.CharField()
    t812 = models.CharField()
    t813 = models.CharField()
    t814 = models.CharField()
    t815 = models.CharField()
    t816 = models.CharField()
    t817 = models.CharField()
    t818 = models.CharField()
    t819 = models.CharField()
    t820 = models.CharField()
    t821 = models.CharField()
    t822 = models.CharField()
    t823 = models.CharField()
    t824 = models.CharField()
    t825 = models.CharField()
    t826 = models.CharField()
    t827 = models.CharField()
    t828 = models.CharField()
    t829 = models.CharField()
    t830 = models.CharField()

    def set_output(self):
        self.output = self.output0 + self.output1 + self.output2 + self.output3 + self.output4 + self.output5 + self.output6 + self.output7 + self.output8

    def role(self):
        if self.id_in_group == 1:
            return 'A'
        if self.id_in_group == 2:
            return 'B'
        if self.id_in_group == 3:
            return 'C'
        if self.id_in_group == 4:
            return 'D'
        if self.id_in_group == 5:
            return 'E'
=======
    avgbelief = models.PositiveIntegerField()
    mostprodATbelief = models.PositiveIntegerField()
    mostprodBTbelief = models.PositiveIntegerField()
>>>>>>> master
