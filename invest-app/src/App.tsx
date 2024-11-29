'use client'

import React from 'react'
import { Button, Card, Table, Badge } from 'flowbite-react'
import Footer from './components/footer'
import Navbar from './components/navbar'
import { HiArrowRight, HiChartPie, HiCurrencyDollar, HiGlobeAlt, HiLightningBolt, HiShieldCheck } from 'react-icons/hi'
import { useDarkMode } from './hooks/darkmode'

export default function ModernInvestAppLanding() {
  const isDarkMode = useDarkMode()

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 ${isDarkMode ? 'dark' : ''}`}>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <section className="text-center py-16 md:py-24">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Invest Smarter, Grow Faster with InvestPro
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-600 dark:text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Experience the future of investing with real-time analytics, diverse portfolios, and global market access.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Button gradientDuoTone="purpleToBlue" size="xl" pill>
              Get Started for Free
              <HiArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button color="light" size="xl" pill>
              Learn More
            </Button>
          </div>
        </section>

        <section className="py-16">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900 dark:text-white">Why Choose InvestPro?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center">
                <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-3 mb-4">
                  <HiChartPie className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                </div>
              </div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Advanced Analytics</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                Gain deep insights into your portfolio with our cutting-edge analytical tools.
              </p>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center">
                <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 mb-4">
                  <HiGlobeAlt className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
              </div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Global Markets</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                Access a world of opportunities with our comprehensive global market coverage.
              </p>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center">
                <div className="rounded-full bg-green-100 dark:bg-green-900 p-3 mb-4">
                  <HiLightningBolt className="h-6 w-6 text-green-600 dark:text-green-300" />
                </div>
              </div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Real-time Updates</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                Stay ahead with lightning-fast, real-time market updates and alerts.
              </p>
            </Card>
          </div>
        </section>

        <section className="py-16">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-900 dark:text-white">Live Market Snapshot</h2>
          <Card>
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell>Asset</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>24h Change</Table.HeadCell>
                <Table.HeadCell>Market Cap</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <img src="/placeholder.svg?height=24&width=24" className="mr-2 h-6 w-6" alt="BTC" />
                      Bitcoin (BTC)
                    </div>
                  </Table.Cell>
                  <Table.Cell>$45,230.15</Table.Cell>
                  <Table.Cell className="text-green-600">+2.7%</Table.Cell>
                  <Table.Cell>$846.32B</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <img src="/placeholder.svg?height=24&width=24" className="mr-2 h-6 w-6" alt="ETH" />
                      Ethereum (ETH)
                    </div>
                  </Table.Cell>
                  <Table.Cell>$3,120.80</Table.Cell>
                  <Table.Cell className="text-green-600">+1.5%</Table.Cell>
                  <Table.Cell>$365.81B</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <img src="/placeholder.svg?height=24&width=24" className="mr-2 h-6 w-6" alt="AAPL" />
                      Apple Inc. (AAPL)
                    </div>
                  </Table.Cell>
                  <Table.Cell>$150.23</Table.Cell>
                  <Table.Cell className="text-red-600">-0.8%</Table.Cell>
                  <Table.Cell>$2.48T</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center">
                      <img src="/placeholder.svg?height=24&width=24" className="mr-2 h-6 w-6" alt="GOOGL" />
                      Alphabet Inc. (GOOGL)
                    </div>
                  </Table.Cell>
                  <Table.Cell>$2,750.80</Table.Cell>
                  <Table.Cell className="text-green-600">+1.2%</Table.Cell>
                  <Table.Cell>$1.84T</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Card>
        </section>

        <section className="py-16">
          <Card className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Ready to Start Investing?</h2>
            <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
              Join thousands of successful investors and start growing your wealth today.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Button gradientDuoTone="purpleToBlue" size="xl" pill>
                Create Your Free Account
              </Button>
              <Button color="light" size="xl" pill>
                View Pricing Plans
              </Button>
            </div>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  )
}

