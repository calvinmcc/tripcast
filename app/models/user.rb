class User < ApplicationRecord

  has_many :trips

  has_secure_password

  VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  validates :email, presence: true, uniqueness: true,
            format: VALID_EMAIL_REGEX

  def fullname
    "#{first_name} #{last_name}"
  end

end
