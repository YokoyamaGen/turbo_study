class CalculatorService
  # 数値を3倍にする
  # @param value [Numeric] 3倍にしたい数値
  # @return [Numeric] 入力値の3倍の値
  # @raise [ArgumentError] 数値以外が入力された場合
  def self.triple(value)
    validate_numeric(value)
    calculate_triple(value)
  end

  private

  def self.validate_numeric(value)
    return if value.is_a?(Numeric)
    raise ArgumentError, "数値を入力してください"
  end

  def self.calculate_triple(value)
    value * 3
  end
end