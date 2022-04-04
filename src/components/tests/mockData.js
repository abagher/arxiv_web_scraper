const mockData = {
    articles: {
      data: [
        {
          id: [
            'http://arxiv.org/abs/2204.00616v1'
          ],
          updated: [
            '2022-04-01T17:59:40Z'
          ],
          published: [
            '2022-04-01T17:59:40Z'
          ],
          title: [
            'Simplicial Embeddings in Self-Supervised Learning and Downstream\n  Classification'
          ],
          summary: [
            '  We introduce Simplicial Embeddings (SEMs) as a way to constrain the encoded\nrepresentations of a self-supervised model to $L$ simplices of $V$ dimensions\neach using a Softmax operation. This procedure imposes a structure on the\nrepresentations that reduce their expressivity for training downstream\nclassifiers, which helps them generalize better. Specifically, we show that the\ntemperature $\\tau$ of the Softmax operation controls for the SEM\nrepresentation\'s expressivity, allowing us to derive a tighter downstream\nclassifier generalization bound than that for classifiers using unnormalized\nrepresentations. We empirically demonstrate that SEMs considerably improve\ngeneralization on natural image datasets such as CIFAR-100 and ImageNet.\nFinally, we also present evidence of the emergence of semantically relevant\nfeatures in SEMs, a pattern that is absent from baseline self-supervised\nmodels.\n'
          ],
          author: [
            {
              name: [
                'Samuel Lavoie'
              ]
            },
            {
              name: [
                'Christos Tsirigotis'
              ]
            },
            {
              name: [
                'Max Schwarzer'
              ]
            },
            {
              name: [
                'Kenji Kawaguchi'
              ]
            },
            {
              name: [
                'Ankit Vani'
              ]
            },
            {
              name: [
                'Aaron Courville'
              ]
            }
          ],
          'arxiv:comment': [
            {
              _: '22 pages, 5 figures, 5 tables, Preprint',
              $: {
                'xmlns:arxiv': 'http://arxiv.org/schemas/atom'
              }
            }
          ],
          link: [
            {
              $: {
                href: 'http://arxiv.org/abs/2204.00616v1',
                rel: 'alternate',
                type: 'text/html'
              }
            },
            {
              $: {
                title: 'pdf',
                href: 'http://arxiv.org/pdf/2204.00616v1',
                rel: 'related',
                type: 'application/pdf'
              }
            }
          ],
          'arxiv:primary_category': [
            {
              $: {
                'xmlns:arxiv': 'http://arxiv.org/schemas/atom',
                term: 'cs.LG',
                scheme: 'http://arxiv.org/schemas/atom'
              }
            }
          ],
          category: [
            {
              $: {
                term: 'cs.LG',
                scheme: 'http://arxiv.org/schemas/atom'
              }
            },
            {
              $: {
                term: 'cs.CV',
                scheme: 'http://arxiv.org/schemas/atom'
              }
            }
          ]
        },
        {
          id: [
            'http://arxiv.org/abs/2204.00613v1'
          ],
          updated: [
            '2022-04-01T17:57:24Z'
          ],
          published: [
            '2022-04-01T17:57:24Z'
          ],
          title: [
            'On the Importance of Asymmetry for Siamese Representation Learning'
          ],
          summary: [
            '  Many recent self-supervised frameworks for visual representation learning are\nbased on certain forms of Siamese networks. Such networks are conceptually\nsymmetric with two parallel encoders, but often practically asymmetric as\nnumerous mechanisms are devised to break the symmetry. In this work, we conduct\na formal study on the importance of asymmetry by explicitly distinguishing the\ntwo encoders within the network -- one produces source encodings and the other\ntargets. Our key insight is keeping a relatively lower variance in target than\nsource generally benefits learning. This is empirically justified by our\nresults from five case studies covering different variance-oriented designs,\nand is aligned with our preliminary theoretical analysis on the baseline.\nMoreover, we find the improvements from asymmetric designs generalize well to\nlonger training schedules, multiple other frameworks and newer backbones.\nFinally, the combined effect of several asymmetric designs achieves a\nstate-of-the-art accuracy on ImageNet linear probing and competitive results on\ndownstream transfer. We hope our exploration will inspire more research in\nexploiting asymmetry for Siamese representation learning.\n'
          ],
          author: [
            {
              name: [
                'Xiao Wang'
              ]
            },
            {
              name: [
                'Haoqi Fan'
              ]
            },
            {
              name: [
                'Yuandong Tian'
              ]
            },
            {
              name: [
                'Daisuke Kihara'
              ]
            },
            {
              name: [
                'Xinlei Chen'
              ]
            }
          ],
          'arxiv:comment': [
            {
              _: '11 pages, CVPR 2022',
              $: {
                'xmlns:arxiv': 'http://arxiv.org/schemas/atom'
              }
            }
          ],
          link: [
            {
              $: {
                href: 'http://arxiv.org/abs/2204.00613v1',
                rel: 'alternate',
                type: 'text/html'
              }
            },
            {
              $: {
                title: 'pdf',
                href: 'http://arxiv.org/pdf/2204.00613v1',
                rel: 'related',
                type: 'application/pdf'
              }
            }
          ],
          'arxiv:primary_category': [
            {
              $: {
                'xmlns:arxiv': 'http://arxiv.org/schemas/atom',
                term: 'cs.CV',
                scheme: 'http://arxiv.org/schemas/atom'
              }
            }
          ],
          category: [
            {
              $: {
                term: 'cs.CV',
                scheme: 'http://arxiv.org/schemas/atom'
              }
            },
            {
              $: {
                term: 'cs.LG',
                scheme: 'http://arxiv.org/schemas/atom'
              }
            }
          ]
        },
        {
          id: [
            'http://arxiv.org/abs/2110.12033v2'
          ],
          updated: [
            '2022-04-01T17:57:19Z'
          ],
          published: [
            '2021-10-22T19:36:56Z'
          ],
          title: [
            'A Simple Baseline for Low-Budget Active Learning'
          ],
          summary: [
            '  Active learning focuses on choosing a subset of unlabeled data to be labeled.\nHowever, most such methods assume that a large subset of the data can be\nannotated. We are interested in low-budget active learning where only a small\nsubset (e.g., 0.2% of ImageNet) can be annotated. Instead of proposing a new\nquery strategy to iteratively sample batches of unlabeled data given an initial\npool, we learn rich features by an off-the-shelf self-supervised learning\nmethod only once, and then study the effectiveness of different sampling\nstrategies given a low labeling budget on a variety of datasets including\nImageNet. We show that although the state-of-the-art active learning methods\nwork well given a large labeling budget, a simple K-means clustering algorithm\ncan outperform them on low budgets. We believe this method can be used as a\nsimple baseline for low-budget active learning on image classification. Code is\navailable at: https://github.com/UCDvision/low-budget-al\n'
          ],
          author: [
            {
              name: [
                'Kossar Pourahmadi'
              ]
            },
            {
              name: [
                'Parsa Nooralinejad'
              ]
            },
            {
              name: [
                'Hamed Pirsiavash'
              ]
            }
          ],
          'arxiv:comment': [
            {
              _: '20 pages, 16 tables; additional experiments',
              $: {
                'xmlns:arxiv': 'http://arxiv.org/schemas/atom'
              }
            }
          ],
          link: [
            {
              $: {
                href: 'http://arxiv.org/abs/2110.12033v2',
                rel: 'alternate',
                type: 'text/html'
              }
            },
            {
              $: {
                title: 'pdf',
                href: 'http://arxiv.org/pdf/2110.12033v2',
                rel: 'related',
                type: 'application/pdf'
              }
            }
          ],
          'arxiv:primary_category': [
            {
              $: {
                'xmlns:arxiv': 'http://arxiv.org/schemas/atom',
                term: 'cs.CV',
                scheme: 'http://arxiv.org/schemas/atom'
              }
            }
          ],
          category: [
            {
              $: {
                term: 'cs.CV',
                scheme: 'http://arxiv.org/schemas/atom'
              }
            },
            {
              $: {
                term: 'cs.LG',
                scheme: 'http://arxiv.org/schemas/atom'
              }
            }
          ]
        },
      ],
      status: 'idle'
    }
}

export { mockData };
