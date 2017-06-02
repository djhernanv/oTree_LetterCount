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
    timeout_seconds = 60
    form_model = models.Player
    form_fields = ['t001',
                   't002',
                   't003',
                   't004',
                   't005',
                   't006',
                   't007',
                   't008',
                   't009',
                   't010',
                   't011',
                   't012',
                   't013',
                   't014',
                   't015',
                   't016',
                   't017',
                   't018',
                   't019',
                   't020',
                   't021',
                   't022',
                   't023',
                   't024',
                   't025',
                   't026',
                   't027',
                   't028',
                   't029',
                   't030',
                   ]

class Round1(Page):
    timeout_seconds = 240
    form_model = models.Player
    form_fields = ['t101',
                   't102',
                   't103',
                   't104',
                   't105',
                   't106',
                   't107',
                   't108',
                   't109',
                   't110',
                   't111',
                   't112',
                   't113',
                   't114',
                   't115',
                   't116',
                   't117',
                   't118',
                   't119',
                   't120',
                   't121',
                   't122',
                   't123',
                   't124',
                   't125',
                   't126',
                   't127',
                   't128',
                   't129',
                   't130',
                   ]

class Round2(Page):
    timeout_seconds = Constants.t
    form_model = models.Player
    form_fields = ['t201',
                   't202',
                   't203',
                   't204',
                   't205',
                   't206',
                   't207',
                   't208',
                   't209',
                   't210',
                   't211',
                   't212',
                   't213',
                   't214',
                   't215',
                   't216',
                   't217',
                   't218',
                   't219',
                   't220',
                   't221',
                   't222',
                   't223',
                   't224',
                   't225',
                   't226',
                   't227',
                   't228',
                   't229',
                   't230',
                   ]


class Round3(Page):
    timeout_seconds = Constants.t
    form_model = models.Player
    form_fields = ['t301',
                   't302',
                   't303',
                   't304',
                   't305',
                   't306',
                   't307',
                   't308',
                   't309',
                   't310',
                   't311',
                   't312',
                   't313',
                   't314',
                   't315',
                   't316',
                   't317',
                   't318',
                   't319',
                   't320',
                   't321',
                   't322',
                   't323',
                   't324',
                   't325',
                   't326',
                   't327',
                   't328',
                   't329',
                   't330',
                   ]


class Round4a(Page):
    timeout_seconds = Constants.t
    form_model = models.Player
    form_fields = ['t401',
                   't402',
                   't403',
                   't404',
                   't405',
                   't406',
                   't407',
                   't408',
                   't409',
                   't410',
                   't411',
                   't412',
                   't413',
                   't414',
                   't415',
                   't416',
                   't417',
                   't418',
                   't419',
                   't420',
                   't421',
                   't422',
                   't423',
                   't424',
                   't425',
                   't426',
                   't427',
                   't428',
                   't429',
                   't430',
                   ]


class Round4b(Page):
    timeout_seconds = Constants.t
    form_model = models.Player
    form_fields = ['t401',
                   't402',
                   't403',
                   't404',
                   't405',
                   't406',
                   't407',
                   't408',
                   't409',
                   't410',
                   't411',
                   't412',
                   't413',
                   't414',
                   't415',
                   't416',
                   't417',
                   't418',
                   't419',
                   't420',
                   't421',
                   't422',
                   't423',
                   't424',
                   't425',
                   't426',
                   't427',
                   't428',
                   't429',
                   't430',
                   ]


class Round5a(Page):
    timeout_seconds = Constants.t
    form_model = models.Player
    form_fields = ['t501',
                   't502',
                   't503',
                   't504',
                   't505',
                   't506',
                   't507',
                   't508',
                   't509',
                   't510',
                   't511',
                   't512',
                   't513',
                   't514',
                   't515',
                   't516',
                   't517',
                   't518',
                   't519',
                   't520',
                   't521',
                   't522',
                   't523',
                   't524',
                   't525',
                   't526',
                   't527',
                   't528',
                   't529',
                   't530',
                   ]


class Round5b(Page):
    timeout_seconds = Constants.t
    form_model = models.Player
    form_fields = ['t501',
                   't502',
                   't503',
                   't504',
                   't505',
                   't506',
                   't507',
                   't508',
                   't509',
                   't510',
                   't511',
                   't512',
                   't513',
                   't514',
                   't515',
                   't516',
                   't517',
                   't518',
                   't519',
                   't520',
                   't521',
                   't522',
                   't523',
                   't524',
                   't525',
                   't526',
                   't527',
                   't528',
                   't529',
                   't530',
                   ]


class Round6a(Page):
    timeout_seconds = Constants.t
    form_model = models.Player
    form_fields = ['t601',
                   't602',
                   't603',
                   't604',
                   't605',
                   't606',
                   't607',
                   't608',
                   't609',
                   't610',
                   't611',
                   't612',
                   't613',
                   't614',
                   't615',
                   't616',
                   't617',
                   't618',
                   't619',
                   't620',
                   't621',
                   't622',
                   't623',
                   't624',
                   't625',
                   't626',
                   't627',
                   't628',
                   't629',
                   't630',
                   ]


class Round6b(Page):
    timeout_seconds = Constants.t
    form_model = models.Player
    form_fields = ['t601',
                   't602',
                   't603',
                   't604',
                   't605',
                   't606',
                   't607',
                   't608',
                   't609',
                   't610',
                   't611',
                   't612',
                   't613',
                   't614',
                   't615',
                   't616',
                   't617',
                   't618',
                   't619',
                   't620',
                   't621',
                   't622',
                   't623',
                   't624',
                   't625',
                   't626',
                   't627',
                   't628',
                   't629',
                   't630',
                   ]


class Round7a(Page):
    timeout_seconds = Constants.t
    form_model = models.Player
    form_fields = ['t701',
                   't702',
                   't703',
                   't704',
                   't705',
                   't706',
                   't707',
                   't708',
                   't709',
                   't710',
                   't711',
                   't712',
                   't713',
                   't714',
                   't715',
                   't716',
                   't717',
                   't718',
                   't719',
                   't720',
                   't721',
                   't722',
                   't723',
                   't724',
                   't725',
                   't726',
                   't727',
                   't728',
                   't729',
                   't730',
                   ]


class Round7b(Page):
    timeout_seconds = Constants.t
    form_model = models.Player
    form_fields = ['t701',
                   't702',
                   't703',
                   't704',
                   't705',
                   't706',
                   't707',
                   't708',
                   't709',
                   't710',
                   't711',
                   't712',
                   't713',
                   't714',
                   't715',
                   't716',
                   't717',
                   't718',
                   't719',
                   't720',
                   't721',
                   't722',
                   't723',
                   't724',
                   't725',
                   't726',
                   't727',
                   't728',
                   't729',
                   't730',
                   ]


class Round8a(Page):
    timeout_seconds = Constants.t
    form_model = models.Player
    form_fields = ['t801',
                   't802',
                   't803',
                   't804',
                   't805',
                   't806',
                   't807',
                   't808',
                   't809',
                   't810',
                   't811',
                   't812',
                   't813',
                   't814',
                   't815',
                   't816',
                   't817',
                   't818',
                   't819',
                   't820',
                   't821',
                   't822',
                   't823',
                   't824',
                   't825',
                   't826',
                   't827',
                   't828',
                   't829',
                   't830',
                   ]


class Round8b(Page):
    timeout_seconds = Constants.t
    form_model = models.Player
    form_fields = ['t801',
                   't802',
                   't803',
                   't804',
                   't805',
                   't806',
                   't807',
                   't808',
                   't809',
                   't810',
                   't811',
                   't812',
                   't813',
                   't814',
                   't815',
                   't816',
                   't817',
                   't818',
                   't819',
                   't820',
                   't821',
                   't822',
                   't823',
                   't824',
                   't825',
                   't826',
                   't827',
                   't828',
                   't829',
                   't830',
                   ]




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
#    Introduction,
#    Task_Instructions,
    Round0,
    Feedback_Round0,
#    Switch_Instructions,
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
#    Questionnaire,
#    Thank_you,
]
